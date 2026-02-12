import { Sparkles } from "lucide-react";
import { ArrowRight } from "lucide-react";
import React from "react";
export default function Hero() {
  return (
    <>
      <link rel="stylesheet" href="css/hero.css" />
      <div
        style={{
          backgroundImage:
            " linear-gradient(to bottom , white , rgb(251, 252, 253))",
          position: "relative",
        }}
      >
        <div
          className="header"
          style={{
            display: "flex",
            width: "90%",
            maxWidth: "1200px",
            marginTop: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            gap: "60px",
            marginBottom: "100px",
            flexDirection: "row",
          }}
        >
          <div
            className="left"
            style={
              {
                // display: "flex",
                // flexFlow: "wrap column"
              }
            }
          >
            <button
              style={{
                backgroundColor: "rgb(250, 245, 255)",
                padding: "10px 15px",
                color: "rgb(130, 42, 229)",
                border: "1px solid rgb(130, 42, 229)",
                borderRadius: "15px",
                cursor: "pointer",
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              <Sparkles size={16} color="rgb(153, 18, 250)" />
              Smart Library Management
            </button>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: "900",
                fontFamily: "sans-serif",
                lineHeight: "1.2",
                color: "rgb(28, 57, 142)",
                marginBottom: "15px",
              }}
            >
              {" "}
              <span> Smart Library </span>{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right , rgb(48, 56, 154) , rgb(139, 32, 237))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent", // fallback
                }}
              >
                Management
              </span>
              <br /> Made Easy
            </h1>
            <p
              style={{
                lineHeight: "1.6",
                color: "rgb(74, 85, 101)",
                fontSize: "clamp(16px, 2vw, 18px)",
                marginBottom: "45px",
              }}
            >
              Streamline your library operations with our modern, intuitive
              platform. Manage books, members, and borrowing cycles effortlessly
              with real-time analytics and insights.
            </p>
            <button
              className="explore"
              style={{
                backgroundColor: "rgb(139, 32, 237)",
                padding: "10px 20px",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                outline: "none",
                display: "inline-flex",
                marginRight: 35,
                marginBottom: 30,
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                className="textexplore"
                style={{ transition: " scale 0.3s ease-in-out" }}
              >
                {" "}
                Explore Books{" "}
              </span>
              <ArrowRight size={16} className="arrowright" />
            </button>
            <button
              className="getstarted"
              style={{
                backgroundColor: "white",
                padding: "10px 20px",
                color: "rgb(28, 57, 142)",
                border: "2px solid rgb(28, 57, 142)",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                outline: "none",
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              Get Started
            </button>
            <hr />
            <div
              className="stats-container"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "30px",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div>
                <h2
                  style={{
                    color: "rgb(28, 57, 142)",
                    fontSize: "clamp(24px, 3vw, 30px)",
                    margin: "0 0 5px 0",
                  }}
                >
                  50k+
                </h2>
                <p
                  style={{
                    color: "rgb(74, 85, 121)",
                    margin: 0,
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                  }}
                >
                  book Available
                </p>
              </div>
              <div>
                <h2
                  style={{
                    color: "rgb(28, 57, 142)",
                    fontSize: "clamp(24px, 3vw, 30px)",
                    margin: "0 0 5px 0",
                  }}
                >
                  12K+
                </h2>
                <p
                  style={{
                    color: "rgb(74, 85, 121)",
                    margin: 0,
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                  }}
                >
                  Active Members
                </p>
              </div>
              <div>
                <h2
                  style={{
                    color: "rgb(28, 57, 142)",
                    fontSize: "clamp(24px, 3vw, 30px)",
                    margin: "0 0 5px 0",
                  }}
                >
                  99.9%
                </h2>
                <p
                  style={{
                    color: "rgb(74, 85, 121)",
                    margin: 0,
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                  }}
                >
                  Uptime
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <img
              src="public/hero-books-tech.png"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                maxHeight: "590px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>
          <svg
            className="wave"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{ display: "block" }}
          >
            <path
              fill="rgb(251, 252, 253)"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,192C672,171,768,149,864,149.3C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
