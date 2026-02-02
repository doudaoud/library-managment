import React from "react";
import {
  BookMarked,
  Users,
  BarChart3,
  Search,
  Clock,
  Shield,
} from "lucide-react";
export default function Card(props) {
  return (
    <>
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
            backgroundImage: `linear-gradient(to bottom , ${props.color1} , ${props.color2} )`,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {/* <BookMarked
                color={"white"}
                size={30}
                style={{
                  margin: "auto",
                }}
              /> */}
          {props.icon}
        </div>

        <h3
          style={{
            color: "rgb(28, 57, 157)",
          }}
        >
          {props.title}
          {/* Book Management */}
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
          {/* Efficiently organize and catalog your entire library collection
              with advanced metadata and categorization. */}
          {props.text}
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
    </>
  );
}
