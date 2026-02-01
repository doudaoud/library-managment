const express = require("express");
const asyncHandler = require("express-async-handler");
const userRoute = express.Router();
require("dotenv").config();
const sendPage = require("../utils/sendPage");
import Login from "../views/login";

userRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    sendPage(res, Login());

  }),
);

module.exports = userRoute
