import React from "react";

export default function Register() {
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
    padding: "20px",
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
              width: "36px",
              height: "36px",
              margin: "0 auto 12px auto",
              borderRadius: "8px",
              backgroundColor: "#0b4ea2",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >
            B
          </div>
          <h1 style={{ margin: "0", fontSize: "36px", fontWeight: 700 }}>
            Gestion de Bibliotheque
          </h1>
          <p style={{ margin: "8px 0 0 0", color: "#6b7280", fontSize: "15px" }}>
            Creez votre compte
          </p>
        </div>

        <div style={panelStyle}>
          <h2 style={{ margin: "0 0 8px 0", fontSize: "30px", fontWeight: 700 }}>
            Inscription
          </h2>
          <p style={{ margin: "0 0 22px 0", color: "#6b7280", fontSize: "14px" }}>
            Remplissez le formulaire pour creer votre compte
          </p>

          <form action="/registeration" method="POST">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <div>
                <label htmlFor="firstName" style={labelStyle}>
                  Prenom
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Jean"
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="lastName" style={labelStyle}>
                  Nom
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Dupont"
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ marginBottom: "14px" }}>
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

            <div style={{ marginBottom: "8px" }}>
              <label htmlFor="password" style={labelStyle}>
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                minLength={8}
                placeholder="********"
                required
                style={inputStyle}
              />
            </div>

            <p style={{ margin: "0 0 14px 0", color: "#6b7280", fontSize: "12px" }}>
              Minimum 8 caracteres, avec majuscules et chiffres recommandes
            </p>

            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="confirmPassword" style={labelStyle}>
                Confirmer le mot de passe
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                minLength={8}
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
              S'inscrire
            </button>
          </form>

          <p style={{ textAlign: "center", margin: "16px 0 0 0", color: "#6b7280" }}>
            Vous avez deja un compte ?{" "}
            <a href="/login" style={{ color: "#0b4ea2", textDecoration: "none", fontWeight: 700 }}>
              Se connecter
            </a>
          </p>
        </div>

        <p style={{ textAlign: "center", margin: "14px 0 0 0", color: "#6b7280", fontSize: "12px" }}>
          (c) 2026 Gestion de Bibliotheque. Tous droits reserves.
        </p>
      </div>
    </div>
  );
}
