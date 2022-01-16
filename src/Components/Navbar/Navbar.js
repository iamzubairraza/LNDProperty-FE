import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="main_nav">
      <div className="Navbar">
        <img className="intestlogo" src="/images/investlogo.svg" />
        {/* <span className="nav-logo">DevLHB</span> */}
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/home">Home</Link>
          <a href="/saveditems">Saved items</a>
          <Link to="/about">About</Link>
          <a to="/login">Contact Us</a>
          <a href="/contact">Login</a>
          <button className="creat_accout">Create account</button>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
