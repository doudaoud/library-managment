const express = require("express");
const asyncHandler = require("express-async-handler");
const registerRoute = express.Router();
require("dotenv").config();
const sendPage = require("../utils/sendPage");
import Register from "../views/register";

registerRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    sendPage(res, Register());
  }),
);

module.exports = registerRoute;
