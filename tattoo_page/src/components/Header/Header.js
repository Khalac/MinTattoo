import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  return (
    <div className="Header">
      <div className="Pages">
        <Link to="/" className="Page">
          Home
        </Link>
        <Link to="/About" className="Page">
          About
        </Link>
        <Link to="/Awards" className="Page">
          Awards
        </Link>
        <Link to="/Gallery" className="Page">
          Gallery
        </Link>
        <Link to="/Contact" className="Page">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
