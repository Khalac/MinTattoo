import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

import MinhText from "../assets/Text/Minh.webp";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_Infor">
        <div className="Footer_Infor_Img">
          <img src={MinhText} alt="" className="Footer_Infor_Logo" />
        </div>
        <div className="Footer_Infor_IG">ig: @pham.minh.phuc</div>
        <div className="Footer_Infor_Phone">(210) 843-4253</div>
        <div className="Footer_Infor_Icon">
          <SlSocialFacebook className="Footer_Infor_Icon_Fb" />
          <SlSocialInstagram className="Footer_Infor_Icon_Insta" />
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
  );
}

export default Footer;
