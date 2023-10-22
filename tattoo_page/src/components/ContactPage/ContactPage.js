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
        <div className="ContactPage_Content">
          <div className="ContactPage_Content_Corlor"></div>
          <div className="ContactPage_Content_Icon">
            {" "}
            <div className="ContactPage_Content_Icon_Phone">
              <FaPhone className="ContactPage_Content_Icon_Phone_Icon" />
              <div className="ContactPage_Content_Icon_Phone_Text">
                (210) 843-4253
              </div>
            </div>
            <div className="ContactPage_Content_Icon_Insta">
              <FaInstagram className="ContactPage_Content_Icon_Insta_Icon" />
              <div className="ContactPage_Content_Icon_Insta_Text">
                pham.minh.phuc
              </div>
            </div>
            <div className="ContactPage_Content_Icon_Mail">
              <FaRegEnvelope className="ContactPage_Content_Icon_Mail_Icon" />
              <div className="ContactPage_Content_Icon_Mail_Text">
                phamminhphuc3673@gmail.com
              </div>
            </div>
            <div className="ContactPage_Content_Icon_Locate">
              <FaLocationDot className="ContactPage_Content_Icon_Locate_Icon" />
              <div className="ContactPage_Content_Icon_Locate_Text">
                San Antonio, Texas
              </div>
            </div>
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
