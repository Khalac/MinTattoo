import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ContactPage.scss";

import {
  FaPhone,
  FaInstagram,
  FaRegEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

function ContactPage() {
  return (
    <div className="ContactPage">
      <div className="ContactPage_Header">
        <Header />
      </div>
      <div className="ContactPage_Background"></div>
      <div className="ContactPage_Content">
        {" "}
        <div className="ContactPage_Title">CONTACT</div>
        <div className="ContactPage_Content_Content">
          <div className="ContactPage_Content_Text">Tel: (210) 843-4253</div>

          <div className="ContactPage_Content_Text">Ig: pham.minh.phuc</div>

          <div className="ContactPage_Content_Text">
            Add: San Antonio, Texas
          </div>

          <div className="ContactPage_Content_Text">
            Mail: phamminhphuc3673@gmail.com
          </div>
        </div>
      </div>
      <div className="ContactPage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;
