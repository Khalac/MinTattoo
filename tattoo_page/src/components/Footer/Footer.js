import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

import MinhText from "../assets/Text/Minh.webp";

function Footer() {
  const nav = useNavigate();
  const linkToHome = () => {
    nav("/", { replace: true });
  };
  const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
  return isMobile ? (
    <div className="Footer">
      <div className="Footer_Infor">
        <div className="Footer_Infor_Img">
          <img src={MinhText} alt="" className="Footer_Infor_Logo" />
        </div>
        <div className="Footer_Infor_IG">Ig: @pham.minh.phuc</div>
        <div className="Footer_Infor_Phone">(210) 843-4253</div>
        <div className="Footer_Infor_Icon">
          <a
            href="https://www.facebook.com/phamminhphuc3673"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer_Infor_Icon_Link"
          >
            <SlSocialFacebook className="Footer_Infor_Icon_Icon" />
          </a>
          <a
            href="https://www.instagram.com/pham.minh.phuc/"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer_Infor_Icon_Link"
          >
            <SlSocialInstagram className="Footer_Infor_Icon_Icon" />
          </a>
        </div>
      </div>
      <div className="Footer_Link">
        <Link to="/" className="Footer_Page">
          Home
        </Link>
        <Link to="/About" className="Footer_Page">
          About
        </Link>
        <Link to="/Awards" className="Footer_Page">
          Awards
        </Link>
        <Link to="/Gallery" className="Footer_Page">
          Gallery
        </Link>
        <Link to="/Contact" className="Footer_Page">
          Contact
        </Link>
      </div>
    </div>
  ) : (
    <div className="Footer">
      <div className="Footer_Link">
        <img
          src={MinhText}
          alt=""
          className="Footer_Img"
          onClick={linkToHome}
        />

        <Link to="/About" className="Footer_Page">
          About
        </Link>
        <Link to="/Awards" className="Footer_Page">
          Awards
        </Link>
        <Link to="/Gallery" className="Footer_Page">
          Gallery
        </Link>
        <Link to="/Contact" className="Footer_Page">
          Contact
        </Link>
      </div>
      <div className="Footer_Infor">
        <div className="Footer_Infor_Icon">
          <a
            href="https://www.instagram.com/pham.minh.phuc/"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer_Infor_Icon_Link"
          >
            <SlSocialInstagram className="Footer_Infor_Icon_Icon" />
          </a>
          <a
            href="https://www.facebook.com/phamminhphuc3673"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer_Infor_Icon_Link"
          >
            <SlSocialFacebook className="Footer_Infor_Icon_Icon" />
          </a>
        </div>
      </div>
      <div className="Footer_Text">Made in Vietnam</div>
    </div>
  );
}

export default Footer;
