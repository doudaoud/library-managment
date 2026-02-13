const express = require("express");
const asyncHandler = require("express-async-handler");
const loginRoute = express.Router();
require("dotenv").config();
const sendPage = require("../utils/sendPage");
import Login from "../views/login";

loginRoute.get(
  "/login",
  asyncHandler(async (req, res) => {
    sendPage(res, Login());
  }),
);

module.exports = loginRoute;
