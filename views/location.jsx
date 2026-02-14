import React from "react";
import LocationNavbar from "./components/LocationNavbar";

export default function Location({ userId }) {
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

  return (
    <div style={pageStyle}>
      <LocationNavbar userId={userId} />
      <main style={contentStyle}>
        <section style={panelStyle}>
          <h1 style={{ marginTop: 0 }}>Page Location</h1>
          <p style={{ marginBottom: 0, color: "#475569" }}>
            Bienvenue. Utilise le bouton Profile pour voir les informations du
            compte connecte.
          </p>
        </section>
      </main>
    </div>
  );
}
