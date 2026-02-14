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
    console.log(req.session.user);  
    
     sendPage(res, Location())

  }),
);

module.exports = locationRoute;
