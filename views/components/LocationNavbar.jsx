import React from "react";

export default function LocationNavbar({ userId }) {
  const navStyle = {
    width: "100%",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #d1d5db",
  };

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Georgia, serif",
  };

  const leftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    color: "#0b4ea2",
  };

  const brandMarkStyle = {
    width: "34px",
    height: "34px",
    borderRadius: "8px",
    backgroundColor: "#0b4ea2",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#0f172a",
    padding: "8px 12px",
    borderRadius: "8px",
    fontWeight: 600,
  };

  const profileButtonStyle = {
    textDecoration: "none",
    backgroundColor: "#0b4ea2",
    color: "#ffffff",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: 700,
    border: "none",
    display: "inline-block",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={leftStyle}>
          <div style={brandMarkStyle}>B</div>
          <strong>Gestion de Bibliotheque</strong>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <a href={`/location/${userId}`} style={linkStyle}>
            Location
          </a>
          <a href={`/profile/${userId}`} style={profileButtonStyle}>
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}
