import React from "react";

export default function Login() {
  const pageStyle = {
    minHeight: "100vh",
    margin: 0,
    backgroundColor: "#f5f6f8",
    fontFamily: "Georgia, serif",
    color: "#111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px",
    boxSizing: "border-box",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "420px",
  };

  const panelStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    padding: "24px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "8px",
    color: "#111827",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "7px",
    border: "1px solid #d1d5db",
    boxSizing: "border-box",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              margin: "0 auto 12px auto",
              borderRadius: "10px",
              backgroundColor: "#0b4ea2",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "22px",
            }}
          >
            B
          </div>
          <h1 style={{ margin: 0, fontSize: "44px", fontWeight: 700 }}>
            Gestion de Bibliotheque
          </h1>
          <p style={{ margin: "8px 0 0 0", color: "#6b7280", fontSize: "16px" }}>
            Connectez-vous a votre compte
          </p>
        </div>

        <div style={panelStyle}>
          <h2 style={{ margin: "0 0 8px 0", fontSize: "40px", fontWeight: 700 }}>
            Connexion
          </h2>
          <p style={{ margin: "0 0 22px 0", color: "#6b7280", fontSize: "14px" }}>
            Entrez vos identifiants pour acceder a votre compte
          </p>

          <form action="/Login" method="POST">
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="email" style={labelStyle}>
                Adresse email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="vous@exemple.com"
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <label htmlFor="password" style={{ ...labelStyle, marginBottom: 0 }}>
                  Mot de passe
                </label>
                <a
                  href="#"
                  style={{ color: "#0b4ea2", textDecoration: "none", fontSize: "14px" }}
                >
                  Mot de passe oublie ?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                border: "none",
                borderRadius: "7px",
                padding: "12px",
                cursor: "pointer",
                backgroundColor: "#0b4ea2",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              Se connecter
            </button>
          </form>

          <p style={{ textAlign: "center", margin: "16px 0 0 0", color: "#6b7280" }}>
            Pas encore de compte ?{" "}
            <a
              href="/register"
              style={{ color: "#0b4ea2", textDecoration: "none", fontWeight: 700 }}
            >
              S'inscrire
            </a>
          </p>
        </div>

        <p
          style={{
            textAlign: "center",
            margin: "14px 0 0 0",
            color: "#6b7280",
            fontSize: "12px",
          }}
        >
          (c) 2026 Gestion de Bibliotheque. Tous droits reserves.
        </p>
      </div>
    </div>
  );
}
