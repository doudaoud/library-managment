const express = require("express");
const asyncHandler = require("express-async-handler");
const homeroute = express.Router();
require("dotenv").config();
import Home from "../views/home";
const sendHomePage = require("../controllers/HomeCotroller");

homeroute.get(
  "/",
  asyncHandler(async (req, res) => {
    
    // renderToStaticMarkup(Home());
    sendHomePage(res, Home());
  }),
);

module.exports = homeroute;