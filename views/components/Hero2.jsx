import React from "react";
import {
  BookMarked,
  Users,
  BarChart3,
  Search,
  Clock,
  Shield,
} from "lucide-react";
import Card from "./Card";

export default function Hero2() {
  // const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;
  return (
    <>
      <div
        className="header2"
        style={{
          marginTop: "250px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <link rel="stylesheet" href="/css/hero.css" />
        <div
          className="titles"
          style={{
            width: "90%",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "rgb(28, 57, 142)",
              fontFamily: "sans-serif",
              fontWeight: "900",
              fontSize: "clamp(32px, 4vw, 50px)",
              marginBottom: "20px",
            }}
          >
            Powerful Features
          </h1>
          <p
            style={{
              color: "rgb(74, 85, 101)",
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: "1.6",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Everything you need to manage your library efficiently and
            effectively.
          </p>
        </div>
        <div
          className="cards"
          style={{
            marginTop: 105,
            width: "90%",
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 30,
            margin: "105px auto 0",
          }}
        >
          <Card
            title="Book Management"
            text="Efficiently organize and catalog your entire library collection
              with advanced metadata and categorization."
            icon={
              <BookMarked
                color={"white"}
                size={30}
                style={{
                  margin: "auto",
                }}
              />
            }
            color1={"rgb(37, 118, 255)"}
            color2={"rgb(27, 104, 255)"}
          />
          <Card
            title="Automated Borrowing"
            text="Streamline lending and return processes with automatic notifications and due date tracking."
            icon={
              <Clock
                size={30}
                color={"white"}
                style={{
                  margin: "auto",
                }}
              />
            }
            color1={"rgb(167, 59, 255)"}
            color2={"rgb(157, 37, 253)"}
          />
          <Card
            title="Member Management"
            text=" Maintain comprehensive member profiles with borrowing history and personalized recommendations. "
            icon={
              <Users
                size={30}
                color={"white"}
                style={{
                  margin: "auto",
                }}
              />
            }
            color1={"rgb(93, 87, 255)"}
            color2={" rgb(114, 100, 248)"}
          />
          <Card
            title="Smart Search"
            text="Find books instantly with intelligent search filters by title, author, category, and more."
            icon={
              <Search
                size={30}
                color={"white"}
                style={{
                  margin: "auto",
                }}
              />
            }
            color1={" rgb(138, 72, 255) "}
            color2={" rgb(131, 51, 255)"}
          />
          <Card
            title="Analytics & Reports"
            text="Gain insights with comprehensive dashboards tracking circulation, popular books, and member trends."
            icon={
              <BarChart3
                size={30}
                color={"white"}
                style={{
                  margin: "auto",
                }}
              />
            }
            color1={"rgb(242, 38, 144)"}
            color2={"rgb(234, 5, 128)"}
          />
          <Card
            title="Security & Privacy"
            text="Enterprise-grade security with encrypted data storage and compliance with privacy regulations."
            icon={
              <Shield
                size={30}
                color={"white"}
                style={{
                  margin: "auto",
                }}
              />
            }
            color1={"rgb(0, 179, 119)"}
            color2={"rgb(0, 162, 108)"}
          />
        </div>
      </div>
    </>
  );
}
