const express = require("express");
const asyncHandler = require("express-async-handler");
const locationRoute = express.Router();
require("dotenv").config();
const sendPage = require("../utils/sendPage");
import Location from "../views/location";

const protect = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

locationRoute.get(
  "/location/:id",
  protect,
  asyncHandler(async (req, res) => {
    const sessionUserId = String(req.session.user.id);
    const routeUserId = String(req.params.id);

    if (routeUserId !== sessionUserId) {
      return res.redirect(`/location/${sessionUserId}`);
    }

    sendPage(res, Location({ userId: sessionUserId }));
  }),
);

module.exports = locationRoute;
