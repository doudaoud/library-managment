import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Rating } from "@smastrom/react-rating";
import CardBook from "./views/components/CardBook";

// Mock the CSS require hook since we're running this with tsx/node
const fs = require("fs");
if (require.extensions) {
  require.extensions[".css"] = () => null;
}

console.log("--- Rendering Rating directly ---");
console.log(
  renderToStaticMarkup(<Rating value={3} style={{ maxWidth: 100 }} />),
);

console.log("\n--- Rendering CardBook ---");
console.log(
  renderToStaticMarkup(<CardBook title="Test Book" author="Test Author" />),
);
