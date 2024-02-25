import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";
import Footer from "../components/Footer";

import "../App.css";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Main;
