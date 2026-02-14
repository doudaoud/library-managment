import React from "react";
import LocationNavbar from "./components/LocationNavbar";

export default function Profile({ user }) {
  const pageStyle = {
    minHeight: "100vh",
    margin: 0,
    backgroundColor: "#f3f4f6",
    color: "#0f172a",
    fontFamily: "Georgia, serif",
  };

  const contentStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "24px 20px",
  };

  const panelStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "22px",
  };

  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "170px 1fr",
    padding: "10px 0",
    borderBottom: "1px solid #f1f5f9",
  };

  const valueStyle = {
    margin: 0,
    fontWeight: 600,
    color: "#1e293b",
    wordBreak: "break-word",
  };

  return (
    <div style={pageStyle}>
      <LocationNavbar userId={user.id} />
      <main style={contentStyle}>
        <section style={panelStyle}>
          <h1 style={{ marginTop: 0, marginBottom: "6px" }}>Profile</h1>
          <p style={{ marginTop: 0, color: "#475569" }}>
            Informations de l utilisateur connecte.
          </p>

          <div style={rowStyle}>
            <strong>ID</strong>
            <p style={valueStyle}>{user.id}</p>
          </div>
          <div style={rowStyle}>
            <strong>Prenom</strong>
            <p style={valueStyle}>{user.pname}</p>
          </div>
          <div style={rowStyle}>
            <strong>Nom</strong>
            <p style={valueStyle}>{user.name}</p>
          </div>
          <div style={{ ...rowStyle, borderBottom: "none" }}>
            <strong>Email</strong>
            <p style={valueStyle}>{user.email}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
