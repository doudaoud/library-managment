const express = require("express");
const asyncHandler = require("express-async-handler");
const registerRoute = express.Router();
require("dotenv").config();
const sendPage = require("../utils/sendPage");
import Register from "../views/register";
import User from "../models/user";
registerRoute.get(
  "/register",
  asyncHandler(async (req, res) => {
    sendPage(res, Register());
  }),
);

registerRoute.post(
  "/registeration",
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(400).send("Tous les champs sont obligatoires.");
    }

    if (password !== confirmPassword) {
      return res.status(400).send("Les mots de passe ne correspondent pas.");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Cet email est déjà utilisé.");
    }
    if(password.length < 8){
      return res.status(400).send("Le mot de passe doit contenir au moins 8 caractères.");
    }
    console.log("Nouvelle inscription:", {
      firstName,
      lastName,
      email,
      passwordLength: password.length,
    });

    let newUser = new User({
      pname: firstName,
      name:lastName, 
      email,
      password,
    });
    newUser.save();
    return res.redirect("/login");
  }),
);

module.exports = registerRoute;
