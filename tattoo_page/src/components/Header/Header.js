import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Minh from "../assets/Text/Minh.webp";
import { useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  const linkToHome = () => {
    nav("/", { replace: true });
  };
  return (
    <div className="Header">
      <div className="Pages">
        <img src={Minh} alt="" className="Pages_Img" onClick={linkToHome} />
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
