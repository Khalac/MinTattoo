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
  const linkToAwards = () => {
    nav("/Awards");
  };
  const linkToAbout = () => {
    nav("/About");
  };
  const linkToGallery = () => {
    nav("/Gallery");
  };
  const linkToContact = () => {
    nav("/Contact");
  };
  return (
    <div className="Header">
      <div className="Pages">
        <img src={Minh} alt="" className="Pages_Img" onClick={linkToHome} />
        <div className="Page" onClick={() => linkToAbout()}>
          About
        </div>
        <div to="/Awards" className="Page" onClick={() => linkToAwards()}>
          Awards
        </div>
        <div to="/Gallery" className="Page" onClick={() => linkToGallery()}>
          Gallery
        </div>
        <div to="/Contact" className="Page" onClick={() => linkToContact()}>
          Contact
        </div>
      </div>
    </div>
  );
}

export default Header;
