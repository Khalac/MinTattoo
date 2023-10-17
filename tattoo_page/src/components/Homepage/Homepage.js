import "./Homepage.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";

import {
  FaPhone,
  FaInstagram,
  FaRegEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import MinhLogo from "../assets/Text/Minh.webp";
import PMPLogo from "../assets/Text/PMP.webp";

import lgcom1 from "../assets/lgcom/lgcom1.webp";
import lgcom2 from "../assets/lgcom/lgcom2.webp";
import lgcom3 from "../assets/lgcom/lgcom3.webp";
import lgcom4 from "../assets/lgcom/lgcom4.webp";
import lgcom5 from "../assets/lgcom/lgcom5.webp";
import lgcom6 from "../assets/lgcom/lgcom6.webp";
import lgcom7 from "../assets/lgcom/lgcom7.webp";
import lgcom8 from "../assets/lgcom/lgcom8.webp";
import lgcom9 from "../assets/lgcom/lgcom9.webp";
import lgcom10 from "../assets/lgcom/lgcom10.webp";
import lgcom11 from "../assets/lgcom/lgcom11.webp";

import upperMark from "../assets/Text/upperMark.png";
import lowerMark from "../assets/Text/lowerMark.png";

import Conven from "../assets/Text/Conven.png";
import Exper from "../assets/Text/Exper.png";
import Trophies from "../assets/Text/Trophies.png";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Homepage_Header">
        <Header />
      </div>
      <div className="Homepage_PageName">
        <div className="Homepage_PageName_Minh">
          <img
            src={MinhLogo}
            alt="Logo"
            className="Homepage_PageName_Minh_Img"
          ></img>
        </div>
        <div className="Homepage_PageName_PMP">
          <img
            src={PMPLogo}
            alt="Logo"
            className="Homepage_PageName_PMP_Img"
          ></img>
        </div>
        <div className="Homepage_PageName_Text">TATTOO ARTIST</div>
        <div className="Homepage_PageName_Brother_Img"></div>
      </div>
      <div className="Homepage_Seperate"></div>
      <div className="Homepage_Competition_Img">
        <div className="Homepage_Competition_Img1"></div>
        <div className="Homepage_Competition_Img2"></div>
        <div className="Homepage_Competition_Img3"></div>
        <div className="Homepage_Competition_Img4"></div>
      </div>
      <div className="Homepage_Competition_Logo">
        <img src={lgcom1} alt="Logo" className="Competition_Logo1"></img>
        <img src={lgcom2} alt="Logo" className="Competition_Logo2"></img>
        <img src={lgcom3} alt="Logo" className="Competition_Logo3"></img>
        <img src={lgcom4} alt="Logo" className="Competition_Logo4"></img>
        <img src={lgcom5} alt="Logo" className="Competition_Logo5"></img>
        <img src={lgcom6} alt="Logo" className="Competition_Logo6"></img>
        <img src={lgcom7} alt="Logo" className="Competition_Logo7"></img>
        <img src={lgcom8} alt="Logo" className="Competition_Logo8"></img>
        <img src={lgcom9} alt="Logo" className="Competition_Logo9"></img>
        <img src={lgcom10} alt="Logo" className="Competition_Logo10"></img>
        <img src={lgcom11} alt="Logo" className="Competition_Logo11"></img>
      </div>
      <div className="Homepage_Introduce">
        <div className="Homepage_Introduce_Video">
          <video
            className="Homepage_Introduce_Video_Control"
            controls
            muted
            preload="none"
          >
            <source
              src={require("../assets/video/main.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="Homepage_Introduce_Text">
          <div className="Homepage_Introduce_Text_QuotationMark">
            <img
              src={upperMark}
              className="Homepage_Introduce_QuotationMark1"
            ></img>
            <div className="Homepage_Introduce_MainText">
              <div className="Homepage_Introduce_MainText1">
                Hi, my name is Minh.
              </div>
              <div className="Homepage_Introduce_MainText2">
                I am Vietnamese born (1999) and raised. For the past 10 years,
                nothing has been more important to me than becoming a master
                inker.
              </div>
            </div>
            <img
              src={lowerMark}
              className="Homepage_Introduce_QuotationMark2"
            ></img>
          </div>
        </div>
      </div>
      <div className="Homepage_Seperate2"></div>
      <div className="Homepage_About">
        <div className="Homepage_About_Title">
          <div className="Homepage_About_Title1">
            ABOUT
            <div className="Homepage_About_Title_Img"></div>
          </div>
          <div className="Homepage_About_Title2"> ME</div>
        </div>
        <div className="Homepage_About_Text">
          <div className="Homepage_About_Text1">Hi, my name is Minh.</div>
          <div className="Homepage_About_Text2">
            I am Vietnamese born (1999) and raised. For the past 10 years,
            nothing has been more important to me than becoming a master inker.
          </div>
        </div>
        <div className="Homepage_About_Button">
          <button className="Homepage_About_Button_Text">Read more</button>
        </div>
      </div>
      <div className="Homepage_Achive">
        <div className="Homepage_Achive_Title">
          <div className="Homepage_Achive_Title1">WHY YOU SHOULD</div>
          <div className="Homepage_Achive_Title2_Border">
            <div className="Homepage_Achive_Title2">CHOOSE ME?</div>
          </div>
        </div>
        <div className="Homepage_Achive_Text">
          <div className="Homepage_Achive_Text_Content">
            {" "}
            I have a very strong portfolio about realism either black and grey
            or color. With the knowledge and experience from 2 cultures, I will
            bring you cutting edge art piece, from design to reality.
          </div>
        </div>
        <div className="Homepage_Achive_Achive">
          <div className="Homepage_Achive_Achive_Content">
            <div className="Homepage_Achive_Achive_Convention">
              <img
                src={Conven}
                alt=""
                className="Homepage_Achive_Achive_Convention_Img"
              ></img>
              <div className="Homepage_Achive_Achive_Convention_Text">
                WORLD CONVENTION
              </div>
            </div>
            <div className="Homepage_Achive_Achive_YrsExper">
              <img
                src={Exper}
                alt=""
                className="Homepage_Achive_Achive_YrsExper_Img"
              ></img>
              <div className="Homepage_Achive_Achive_YrsExper_Text">
                YEARS EXPERIENCE
              </div>
            </div>
            <div className="Homepage_Achive_Achive_Trophies">
              <img
                src={Trophies}
                alt=""
                className="Homepage_Achive_Achive_Trophies_Img"
              ></img>
              <div className="Homepage_Achive_Achive_Trophies_Text">
                TROPHIES
              </div>
            </div>
          </div>
          <div className="Homepage_Achive_Achive_Details">
            <div className="Homepage_Achive_Achive_Details_Button">
              View Details
            </div>
          </div>
        </div>
      </div>
      <div className="Homepage_Gallery">
        <div className="Homepage_Gallery_Name">PHAM MINH PHUC</div>
        <div className="Homepage_Gallery_Title">GALLERY</div>
        <div className="Homepage_Gallery_Text">
          <div className="Homepage_Gallery_Text_Content">
            Minh's artistic journey began at a very young age, when his
            fascination with drawing small objects sparked his creative spirit.
          </div>
        </div>
      </div>
      <div className="Homepage_Seperate3"></div>
      <div className="Homepage_Contact">
        <div className="Homepage_Contact_Title">CONTACT</div>
        <div className="Homepage_Contact_Content">
          <div className="Homepage_Contact_Corlor"></div>
          <div className="Homepage_Contact_Content_Icon_Color">
            {" "}
            <div className="Homepage_Contact_Content_Phone">
              <FaPhone className="Homepage_Contact_Content_Phone_Icon" />
              <div className="Homepage_Contact_Content_Phone_Text">
                (210) 843-4253
              </div>
            </div>
            <div className="Homepage_Contact_Content_Insta">
              <FaInstagram className="Homepage_Contact_Content_Insta_Icon" />
              <div className="Homepage_Contact_Content_Insta_Text">
                pham.minh.phuc
              </div>
            </div>
            <div className="Homepage_Contact_Content_Mail">
              <FaRegEnvelope className="Homepage_Contact_Content_Mail_Icon" />
              <div className="Homepage_Contact_Content_Mail_Text">
                phamminhphuc3673@gmail.com
              </div>
            </div>
            <div className="Homepage_Contact_Content_Locate">
              <FaLocationDot className="Homepage_Contact_Content_Locate_Icon" />
              <div className="Homepage_Contact_Content_Locate_Text">
                San Antonio, Texas
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Homepage_Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.7987797855076!2d-98.3705113238811!3d29.522223875190804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20.1!3m3!1m2!1s0x865cf3339e4553b7%3A0x2e4edb779891b59d!2s1920%20Ponce%20De%20Leon%2C%20San%20Antonio%2C%20TX%2078239%2C%20USA!5e0!3m2!1sen!2s!4v1697542751821!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="Homepage_Map_Size"
        ></iframe>
      </div>
      <div className="Homepage_Seperate2"></div>
      <div className="Homepage_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
