import React from "react";
import { BookOpen } from "lucide-react";
export default function Navbar() {
  return (
    <div style={{ width: "100%", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <link rel="stylesheet" href="/css/navbar.css" />
      <div
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "auto",
          padding: 10,
          height: 60,
          // backgroundColor: "red",
        }}
      >
        <div
          className="right"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            // backgroundColor: "blue",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              borderRadius: 10,
              background:
                "linear-gradient(to bottom right, rgb(48, 56, 154) , rgb(139, 32, 237))",
            }}
          >
            <BookOpen
              size={35}
              strokeWidth={2.75}
              color="white"
              style={{
                marginTop: 4,
              }}
            />
          </div>
          <h3
            className="name_site"
            style={{
              color: " rgb(28, 57, 142)",
              fontSize: "20px",
              fontFamily: "sans-serif",
              fontWeight: 800,
            }}
          >
            LibraryHub
          </h3>
        </div>
        <div
          className="center"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            // backgroundColor: "green",
            // color: "rgb(28, 57, 142)",
          }}
        >
          <p>Home</p>
          <p>Books</p>
          <p>Categories</p>
          <p>Members</p>
          <p>Dashbord</p>
          <p>Contact</p>
        </div>
        <div className="right" style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "transparent",
              color: "#344054",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Login
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "rgb(139, 32, 237)",
              color: "white",
              border: "none",
              borderRadius: "15px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
