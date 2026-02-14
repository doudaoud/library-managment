const express = require("express");
const asyncHandler = require("express-async-handler");
const profileRoute = express.Router();
require("dotenv").config();
const sendPage = require("../utils/sendPage");
import Profile from "../views/profile";
import User from "../models/user";

const protect = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

profileRoute.get(
  "/profile/:id",
  protect,
  asyncHandler(async (req, res) => {
    const sessionUserId = String(req.session.user.id);
    const routeUserId = String(req.params.id);

    if (routeUserId !== sessionUserId) {
      return res.redirect(`/profile/${sessionUserId}`);
    }

    const user = await User.findById(sessionUserId).lean();
    if (!user) {
      return res.status(404).send("Utilisateur introuvable.");
    }

    return sendPage(
      res,
      Profile({
        user: {
          id: String(user._id),
          pname: user.pname,
          name: user.name,
          email: user.email,
        },
      }),
    );
  }),
);

module.exports = profileRoute;
