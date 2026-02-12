import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Popular from "./components/Popular";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Bynumber from "./components/Bynumber";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*debut de header 2  */}
      <Hero2 />
      {/*fin de header 2  */}
      <Popular />
      <Explore />
      <Bynumber />
      <Footer />
    </>
  );
}
