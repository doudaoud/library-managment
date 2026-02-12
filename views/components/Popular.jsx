import React from "react";
import CardBook from "./CardBook";

export default function Popular() {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "1984",
      author: "George Orwell",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <link rel="stylesheet" href="/css/popular.css" />
      <div className="popular-section">
        <div className="top">
          <div>
            <h1>Popular Books</h1>
            <p>
              Discover the most borrowed and highly-rated books in our
              collection.
            </p>
          </div>
          <button className="view-all-btn">View All Books</button>
        </div>
        <div className="books">
          {books.map((book, index) => (
            <CardBook
              key={index}
              title={book.title}
              author={book.author}
              image={book.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
