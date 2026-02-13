const express = require("express");
const asyncHandler = require("express-async-handler");
const locationRoute = express.Router();
require("dotenv").config();
const sendPage = require("../utils/sendPage");
import Location from "../views/location";

locationRoute.get(
  "/location",
  asyncHandler(async (req, res) => {
    sendPage(res, Location());
  }),
);


module.exports = locationRoute;