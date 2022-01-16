import React from "react";
// import About from "./About";
import Calculator from "./Components/Calculator";
import Navbar from "./Components/Navbar/Navbar";
import Aboutus from "./Components/Aboutus";
import Feature from "./Components/Feature";
import Invest from "./Components/Invest";
import Footer from "./Components/Footer";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Calculator />
      <Aboutus />
      <Feature />
      <Invest />
      <Footer />
    </div>
  );
};

export default LandingPage;
