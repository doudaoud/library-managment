import React from "react";
import {
  BookMarked,
  Users,
  BarChart3,
  Search,
  Clock,
  Shield,
} from "lucide-react";
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
          <div
            className="card"
            style={{
              width: "382px",
              height: "314px",
              display: "flex",
              flexFlow: "column wrap",
              paddingLeft: "30px",
              // paddingTop: 50,
              justifyContent: "center",
              gap: 15,
            }}
          >
            <div
              className="icon"
              style={{
                height: "56px",
                width: "56px",
                borderRadius: "10px",
                backgroundImage:
                  "linear-gradient(to bottom , rgb(37, 118, 255) , rgb(27, 104, 255))",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <BookMarked
                color={"white"}
                size={30}
                style={{
                  margin: "auto",
                }}
              />
            </div>

            <h3
              style={{
                color: "rgb(28, 57, 157)",
              }}
            >
              Book Management
            </h3>
            <p
              style={{
                fontSize: "20px",
                fontFamily: "sans-serif",
                color: "rgb(74, 85, 101)",
                lineHeight: "28px",
                width: "80%",
              }}
            >
              Efficiently organize and catalog your entire library collection
              with advanced metadata and categorization.
            </p>
            <div
              style={{
                width: "20%",
                height: "3px",
                backgroundImage:
                  "linear-gradient(to right, rgb(154, 19, 251) , white)",
              }}
            >
              {/* ce dive doit etre vide pour faire la ligner de carte   parfait cette idee elle marche bien */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
