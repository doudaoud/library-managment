import React from "react";

export default function Home() {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Library Manager - Accueil</title>
        <link rel="stylesheet" href="/css/home.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="container">
          <nav className="navbar">
            <div className="logo">LibManager.</div>
            <div className="nav-links">
              <a href="#">Accueil</a>
              <a href="#">Catalogue</a>
              <a href="#">A propos</a>
              <a
                href="/login"
                className="btn btn-primary"
                style={{ padding: "8px 20px" }}
              >
                Connexion
              </a>
            </div>
          </nav>

          <header className="hero">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            <div className="hero-content">
              <h1>
                Gérez votre bibliothèque <br />
                <span>Simplement & Efficacement</span>
              </h1>
              <p>
                Une solution moderne pour la gestion de vos livres, emprunts et
                adhérents. Interface intuitive, rapide et sécurisée.
              </p>
              <div className="hero-buttons">
                <a href="/register" className="btn btn-primary">
                  Commencer
                </a>
                <a href="#" className="btn btn-outline">
                  En savoir plus
                </a>
              </div>
            </div>
          </header>
        </div>

        <section className="features">
          <div className="container">
            <div className="section-title">
              <h2>Pourquoi choisir LibManager ?</h2>
              <p>Tous les outils qu'il vous faut pour une gestion sereine.</p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3>Gestion Complète</h3>
                <p>
                  Suivez l'état de tous vos ouvrages en temps réel. Catalogue
                  illimité et catégorisation intelligente.
                </p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Adhérents</h3>
                <p>
                  Gérez facilement les inscriptions, les retards et l'historique
                  de vos membres.
                </p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3>Gain de Temps</h3>
                <p>
                  Automatisez les tâches répétitives et concentrez-vous sur
                  l'essentiel : la culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <p>&copy; 2026 LibManager. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
