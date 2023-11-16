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
import BgMPpc8 from "../assets/bg/bgPC/main/14.png";

function ContactPage() {
  const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
  return isMobile ? (
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
  ) : (
    <div className="ContactPage">
      <div className="ContactPage_Header">
        <Header />
      </div>
      <div className="ContactPage_Content">
        <img src={BgMPpc8} alt="" className="ContactPage_Contact_Bg" />
        {/* <img src={BgMP10} alt="" className="Homepage_Contact_Bg" /> */}
        <div className="ContactPage_Title">CONTACT</div>
        <div className="ContactPage_Text">
          TEXT ME FOR BOOKING OR MORE INFORMATION
        </div>
        <div className="ContactPage_Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.7987797855076!2d-98.3705113238811!3d29.522223875190804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20.1!3m3!1m2!1s0x865cf3339e4553b7%3A0x2e4edb779891b59d!2s1920%20Ponce%20De%20Leon%2C%20San%20Antonio%2C%20TX%2078239%2C%20USA!5e0!3m2!1sen!2s!4v1697542751821!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="ContactPage_Map_Size"
          ></iframe>
        </div>
        <div className="ContactPage_Contact_Content">
          <div className="ContactPage_Contact_Content_Text">
            Tel: (210) 843-4253
          </div>

          <div className="ContactPage_Contact_Content_Text">
            Ig: pham.minh.phuc
          </div>

          <div className="ContactPage_Contact_Content_Text">
            Add: San Antonio, Texas
          </div>

          <div className="ContactPage_Contact_Content_Text">
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
