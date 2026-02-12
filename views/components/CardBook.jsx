import React, { useState } from "react";
import StarRating from "./StarRating";

export default function CardBook(props) {
  const [rating, setRating] = useState(0);
  return (
    <>
      <link rel="stylesheet" href="/css/cardbook.css" />
      <div className="cardbook">
        <div className="img">
          <img
            src={
              props.image ||
              "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop"
            }
            alt={props.title}
          />
          <button className="view-details-btn">View Details</button>
        </div>
        <div className="titles">
          <h3>{props.title || "Book Title"}</h3>
          <p>{props.author || "Author Name"}</p>
          <div className="star-container">
            <StarRating rating={rating} onRatingChange={setRating} />
          </div>
        </div>
      </div>
    </>
  );
}
