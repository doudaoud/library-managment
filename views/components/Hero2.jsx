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
export default function Hero2(props) {
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
            width: "80%",
            margin: "auto",
          }}
        >
          <h1
            style={{
              color: "rgb(28, 57, 142)",
              fontFamily: "sans-serif",
              fontWeight: "900",
              fontSize: "50px",
              marginBottom: "20px",
            }}
          >
            Powerful Features
          </h1>
          <p
            style={{
              color: "rgb(74, 85, 101)",
              fontSize: "18px",
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
            width: "80%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginRight: "140px",
            gap: 30,
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
          />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
