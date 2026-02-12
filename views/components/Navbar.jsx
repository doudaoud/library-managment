import React, { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ width: "100%", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <link rel="stylesheet" href="/css/navbar.css" />
      <div
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          maxWidth: "1200px",
          margin: "auto",
          padding: "15px 0",
          height: 60,
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <div
          className="logo-section"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
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
              flexShrink: 0,
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
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            LibraryHub
          </h3>
        </div>

        {/* Desktop Navigation */}
        <div
          className="nav-links desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 25,
          }}
        >
          <p>Home</p>
          <p>Books</p>
          <p>Categories</p>
          <p>Members</p>
          <p>Dashbord</p>
          <p>Contact</p>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="auth-buttons desktop-auth" style={{ display: "flex", gap: "15px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "transparent",
              color: "#344054",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
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
              transition: "all 0.3s ease",
            }}
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            borderRadius: "8px",
            backgroundColor: "rgba(139, 32, 237, 0.1)",
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} color="rgb(139, 32, 237)" />
          ) : (
            <Menu size={24} color="rgb(139, 32, 237)" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              padding: "20px",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                className="nav-links mobile-nav"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <p style={{ padding: "10px 0", fontSize: "18px" }}>Home</p>
                <p style={{ padding: "10px 0", fontSize: "18px" }}>Books</p>
                <p style={{ padding: "10px 0", fontSize: "18px" }}>Categories</p>
                <p style={{ padding: "10px 0", fontSize: "18px" }}>Members</p>
                <p style={{ padding: "10px 0", fontSize: "18px" }}>Dashbord</p>
                <p style={{ padding: "10px 0", fontSize: "18px" }}>Contact</p>
              </div>
              <div
                className="auth-buttons mobile-auth"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  paddingTop: "15px",
                  borderTop: "1px solid #eee",
                }}
              >
                <button
                  style={{
                    padding: "12px 20px",
                    backgroundColor: "transparent",
                    color: "#344054",
                    border: "2px solid #344054",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderRadius: "8px",
                  }}
                >
                  Login
                </button>
                <button
                  style={{
                    padding: "12px 20px",
                    backgroundColor: "rgb(139, 32, 237)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
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
        )}
      </div>
    </div>
  );
}
