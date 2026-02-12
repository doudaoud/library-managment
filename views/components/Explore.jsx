import React from "react";

export default function Explore() {
  return (
    <>
      <link rel="stylesheet" href="/css/explore.css" />
      <div className="explore-container">
        <div className="content">
          <h2>Explore Our Complete Collection</h2>
          <p>
            With over 50,000 books across multiple genres and categories, our
            library offers something for everyone. From classic literature to
            contemporary bestsellers, find your next favorite read.
          </p>
          <button className="explore-btn">Browse All Categories</button>
        </div>
        <div className="image">
          {/* Using a placeholder illustration that matches the theme */}
          <img
            src="./public/books-collection.png"
            alt="Library Collection"
            style={{ mixBlendMode: "multiply" }} // Optional hack to blend white background
          />
        </div>
      </div>
    </>
  );
}
