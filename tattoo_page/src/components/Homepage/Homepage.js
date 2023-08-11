import "./Homepage.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Homepage_header_text">
        <div className="Homepage_header">
          <Header />
        </div>
        <div className="Homepage_text">
          <div className="text1">PHAM MINH PHUC</div>
          <div className="text2">
            <div className="text2_1">FLY AWAY</div>
            <div className="text2_2">WITH ART</div>
          </div>
        </div>
      </div>

      <div className="link_page">
        <Link to="/About" className="About_link">
          About
        </Link>
        <Link to="/Tattoos" className="Tattoos_link">
          Tattoos
        </Link>
        <Link to="/Art" className="Art_link">
          Art
        </Link>
        <Link to="/Contact" className="Contact_link">
          Contact
        </Link>
      </div>

      <div className="Author_location">
        <div className="Author_location_icon">
          {" "}
          <GoLocation /> Location{" "}
        </div>
        <div className="Author_location_text">
          <iframe
            className="gg_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.840828539444!2d-98.36777236962942!3d29.522102774213508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf3339e4553b7%3A0x2e4edb779891b59d!2s1920%20Ponce%20De%20Leon%2C%20San%20Antonio%2C%20TX%2078239%2C%20USA!5e0!3m2!1sen!2s!4v1691640763942!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="Homepage_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
