const express = require("express");
import React from "react";
const mongoose = require("mongoose");
const path = require("path");
import Login from "./views/login";
import Register from "./views/register";
import { renderToStaticMarkup } from "react-dom/server";
require("dotenv").config();
const app = express();

app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "jsx");
app.set("views", "views");

// app.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     sendHomePage(res, <Home />);
//   }),
// );

// app.get("/login", (req, res) => {
//   res.send( "<!DOCTYPE html>" + renderToStaticMarkup(<Login />));
// });

// app.get("/register", (req, res) => {
//   res.send(renderToStaticMarkup(<Register />));
// });

app.use("/", require("./routes/home"));
app.use("/", require("./routes/login"));
app.use("/", require("./routes/register"));

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("the db coneected");
    console.log(`http://localhost:${process.env.PORT}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
});
