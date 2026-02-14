const express = require("express");
const asyncHandler = require("express-async-handler");
const loginRoute = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const sendPage = require("../utils/sendPage");
import Login from "../views/login";
import User from "../models/user";
import bcrypt from "bcrypt";
loginRoute.get(
  "/login",
  asyncHandler(async (req, res) => {
    sendPage(res, Login());
  }),
);

loginRoute.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email et mot de passe obligatoires.");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("Email ou mot de passe invalide.");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send("Email ou mot de passe invalide.");
    }

    console.log("Connexion reussie:", { email });
    
    if (req.session) {
      req.session.user = {
        id: user._id,
        email: user.email,
        name: user.name,
      };
    }
    return res.redirect(`/location/${user._id}`);
  }),
);

module.exports = loginRoute;
