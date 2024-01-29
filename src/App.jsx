import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar2";
import Header from "./Component/Header";
import NewsCard from "./Component/NewsCard";
import LatestNews from "./Component/LatestNews";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "3rem" }} className="p-5">
        <h1>The Tesla Channel</h1>
      </div>

      <Header />

      <NewsCard />

      <LatestNews />

      <Footer />
    </>
  );
}

export default App;
