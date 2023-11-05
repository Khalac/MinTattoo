import "./Homepage.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

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

import Conven from "../assets/Text/Conven.webp";
import Exper from "../assets/Text/Exper.webp";
import Trophies from "../assets/Text/Trophies.webp";

import BgMP2 from "../assets/bg/bg1/mainpage/2.png";
import BgMP3 from "../assets/bg/bg1/mainpage/3.png";
import BgMP4 from "../assets/bg/bg1/mainpage/4.png";
import BgMP5 from "../assets/bg/bg1/mainpage/5.png";
import BgMP6 from "../assets/bg/bg1/mainpage/6.png";
import BgMP7 from "../assets/bg/bg1/mainpage/7.png";
import BgMP8 from "../assets/bg/bg1/mainpage/8.png";
import BgMP9 from "../assets/bg/bg1/mainpage/9.png";
import BgMP10 from "../assets/bg/bg1/mainpage/10.png";

function Homepage() {
  const [nameStyle, setNameStyle] = useState("Realism");
  const [style, setStyle] = useState();

  const [activeRealism, setActiveRealism] = useState(true);
  const [activeColor, setActiveColor] = useState(false);
  const [activeFineLine, setActiveFineLine] = useState(false);
  const [activeAsian, setActiveAsian] = useState(false);
  const [activeBlackGrey, setActiveBlackGrey] = useState(false);
  const [activePortrait, setActivePortrait] = useState(false);

  const [popUp, setPopUp] = useState(false);
  const [img, setImg] = useState();

  const popUpImg = (img) => {
    setImg(img);
    setPopUp(!popUp);
    if (popUp === true) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    if (nameStyle === "Realism") setStyle(listImgRealism);
    if (nameStyle === "Color") setStyle(listImgColor);
    if (nameStyle === "FineLine") setStyle(listImgFineLine);
    if (nameStyle === "BlackGrey") setStyle(listImgBlackGrey);
    if (nameStyle === "Asian") setStyle(listImgAsian);
    if (nameStyle === "Portrait") setStyle(listImgPortrait);
  }, [nameStyle]);
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const imagesRealism = importAll(
    require.context("../assets/realism", false, /\.webp$/)
  );
  let imgRealism = [];
  for (let i = 1; i <= 25; ++i) {
    imgRealism.push(imagesRealism[`${i}.webp`]);
  }
  var realism = 0;
  const listImgRealism = imgRealism.map((img) => {
    realism++;
    return (
      <div className={`Realism_div_` + realism}>
        <img
          src={img}
          alt=""
          className={`Realism_` + realism}
          onClick={() => popUpImg(img)}
        ></img>{" "}
      </div>
    );
  });

  const imagesPortrait = importAll(
    require.context("../assets/portrait", false, /\.webp$/)
  );
  let imgPortrait = [];

  for (let i = 1; i <= 20; ++i) {
    imgPortrait.push(imagesPortrait[`${i}.webp`]);
  }
  var portrait = 0;
  const listImgPortrait = imgPortrait.map((img) => {
    portrait++;
    return (
      <div className={`Portrait_div_` + portrait}>
        <img
          src={img}
          alt=""
          className={`Portrait_` + portrait}
          onClick={() => popUpImg(img)}
        ></img>{" "}
      </div>
    );
  });

  const imagesColor = importAll(
    require.context("../assets/color", false, /\.webp$/)
  );
  let imgColor = [];
  for (let i = 1; i <= 35; ++i) {
    imgColor.push(imagesColor[`${i}.webp`]);
  }
  var color = 0;
  const listImgColor = imgColor.map((img) => {
    color++;
    return (
      <div className={`Color_div_` + color}>
        <img
          src={img}
          alt=""
          className={`Color_` + color}
          onClick={() => popUpImg(img)}
        ></img>{" "}
      </div>
    );
  });

  const imagesFineLine = importAll(
    require.context("../assets/fineline", false, /\.webp$/)
  );
  let imgFineLine = [];
  for (let i = 1; i <= 15; ++i) {
    imgFineLine.push(imagesFineLine[`${i}.webp`]);
  }
  var fineline = 0;
  const listImgFineLine = imgFineLine.map((img) => {
    fineline++;
    return (
      <div className={`FineLine_div_` + fineline}>
        <img
          src={img}
          alt=""
          className={`FineLine_` + fineline}
          onClick={() => popUpImg(img)}
        ></img>{" "}
      </div>
    );
  });

  const imagesBlackGrey = importAll(
    require.context("../assets/blackgrey", false, /\.webp$/)
  );
  let imgBlackGrey = [];
  for (let i = 1; i <= 20; ++i) {
    imgBlackGrey.push(imagesBlackGrey[`${i}.webp`]);
  }
  var blackgrey = 0;
  const listImgBlackGrey = imgBlackGrey.map((img) => {
    blackgrey++;
    return (
      <div className={`Blackgrey_div_` + blackgrey}>
        <img
          src={img}
          alt=""
          className={`Blackgrey_` + blackgrey}
          onClick={() => popUpImg(img)}
        ></img>{" "}
      </div>
    );
  });

  const imagesAsian = importAll(
    require.context("../assets/asian", false, /\.webp$/)
  );
  let imgAsian = [];
  for (let i = 1; i <= 15; ++i) {
    imgAsian.push(imagesAsian[`${i}.webp`]);
  }
  var asian = 0;
  const listImgAsian = imgAsian.map((img) => {
    asian++;
    return (
      <div className={`Asian_div_` + asian}>
        <img
          src={img}
          alt=""
          className={`Asian_` + asian}
          onClick={() => popUpImg(img)}
        ></img>{" "}
      </div>
    );
  });

  const setRealism = () => {
    setNameStyle("Realism");
    setActiveRealism(true);
    setActivePortrait(false);
    setActiveFineLine(false);
    setActiveColor(false);
    setActiveBlackGrey(false);
    setActiveAsian(false);
  };
  const setPortrait = () => {
    setNameStyle("Portrait");
    setActiveRealism(false);
    setActivePortrait(true);
    setActiveFineLine(false);
    setActiveColor(false);
    setActiveBlackGrey(false);
    setActiveAsian(false);
  };
  const setFineLine = () => {
    setNameStyle("FineLine");
    setActiveRealism(false);
    setActivePortrait(false);
    setActiveFineLine(true);
    setActiveColor(false);
    setActiveBlackGrey(false);
    setActiveAsian(false);
  };
  const setColor = () => {
    setNameStyle("Color");
    setActiveRealism(false);
    setActivePortrait(false);
    setActiveFineLine(false);
    setActiveColor(true);
    setActiveBlackGrey(false);
    setActiveAsian(false);
  };
  const setBlackGrey = () => {
    setNameStyle("BlackGrey");
    setActiveRealism(false);
    setActivePortrait(false);
    setActiveFineLine(false);
    setActiveColor(false);
    setActiveBlackGrey(true);
    setActiveAsian(false);
  };
  const setAsian = () => {
    setNameStyle("Asian");
    setActiveRealism(false);
    setActivePortrait(false);
    setActiveFineLine(false);
    setActiveColor(false);
    setActiveBlackGrey(false);
    setActiveAsian(true);
  };
  const nav = useNavigate();
  const linkToAbout = () => {
    nav("/About", { replace: true });
  };
  const linkToAwards = () => {
    nav("/Awards", { replace: true });
  };
  const linkToGallery = () => {
    nav("/Gallery", { replace: true });
  };
  const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);

  return isMobile ? (
    <div className="Homepage">
      {popUp && (
        <div className="popUp">
          <div onClick={popUpImg} className="overlay"></div>
          <div
            onClick={popUpImg}
            className="popUP_Content"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "80%",
            }}
          ></div>
        </div>
      )}
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
        <img src={BgMP2} alt="" className="Homepage_Competition_Img_Bg" />
        <div className="Homepage_Competition_Img1"></div>
        <div className="Homepage_Competition_Img2"></div>
        <div className="Homepage_Competition_Img3"></div>
        <div className="Homepage_Competition_Img4"></div>
      </div>
      <div className="Homepage_Competition_Logo">
        <div className="Homepage_Competition_Logo_Container">
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
        <img src={BgMP3} alt="" className="Homepage_Competition_Logo_Bg" />
      </div>
      <div className="Homepage_Introduce">
        <img src={BgMP4} alt="" className="Homepage_Introduce_Bg" />
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
      <div className="Homepage_Seperate2">
        <img src={BgMP5} alt="" className="Homepage_Seperate2_Bg" />
      </div>
      <div className="Homepage_About">
        <img src={BgMP6} alt="" className="Homepage_About_Bg" />
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
        <div className="Homepage_About_Button" onClick={linkToAbout}>
          <button className="Homepage_About_Button_Text">Read more</button>
        </div>
      </div>
      <div className="Homepage_Achive">
        <img src={BgMP7} alt="" className="Homepage_Achive_Bg" />
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
          <div
            className="Homepage_Achive_Achive_Details"
            onClick={linkToAwards}
          >
            <div className="Homepage_Achive_Achive_Details_Button">
              View Details
            </div>
          </div>
        </div>
      </div>
      <div className="Homepage_Gallery">
        <img src={BgMP8} alt="" className="Homepage_Gallery_Bg" />
        <div className="Homepage_Gallery_Name">PHAM MINH PHUC</div>
        <div className="Homepage_Gallery_Title">GALLERY</div>
        <div className="Homepage_Gallery_Text">
          <div className="Homepage_Gallery_Text_Content">
            Minh's artistic journey began at a very young age,{" "}
            <div>
              when his fascination with drawing small objects sparked his
              creative spirit.
            </div>
          </div>
        </div>
        <div className="Homepage_Gallery_Img">
          <div className="Homepage_Gallery_Img_Styles">
            <div
              className={
                activeRealism
                  ? `Homepage_Gallery_Img_Styles_Style_Left active`
                  : `Homepage_Gallery_Img_Styles_Style_Left`
              }
              onClick={setRealism}
            >
              REALISM
            </div>
            <div
              className={
                activePortrait
                  ? `Homepage_Gallery_Img_Styles_Style active`
                  : `Homepage_Gallery_Img_Styles_Style`
              }
              onClick={setPortrait}
            >
              PORTRAIT
            </div>
            <div
              className={
                activeFineLine
                  ? `Homepage_Gallery_Img_Styles_Style_Right active`
                  : `Homepage_Gallery_Img_Styles_Style_Right`
              }
              onClick={setFineLine}
            >
              LINEWORK
            </div>
            <div
              className={
                activeColor
                  ? `Homepage_Gallery_Img_Styles_Style_Left active`
                  : `Homepage_Gallery_Img_Styles_Style_Left`
              }
              onClick={setColor}
            >
              COLOR
            </div>
            <div
              className={
                activeBlackGrey
                  ? `Homepage_Gallery_Img_Styles_Style active`
                  : `Homepage_Gallery_Img_Styles_Style`
              }
              onClick={setBlackGrey}
            >
              BLACK&GREY
            </div>
            <div
              className={
                activeAsian
                  ? `Homepage_Gallery_Img_Styles_Style_Right active`
                  : `Homepage_Gallery_Img_Styles_Style_Right`
              }
              onClick={setAsian}
            >
              ASIAN
            </div>
          </div>
          <div className="Homepage_Gallery_Img_Container ">{style}</div>
        </div>
        <div className="Homepage_Gallery_Button" onClick={linkToGallery}>
          <div className="Homepage_Gallery_Button_Text">View more</div>
        </div>
      </div>
      <div className="Homepage_Seperate3">
        <img src={BgMP9} alt="" className="Homepage_Seperate3_Bg" />
      </div>
      <div className="Homepage_Contact">
        <img src={BgMP10} alt="" className="Homepage_Contact_Bg" />
        <div className="Homepage_Contact_Title">CONTACT</div>
        <div className="Homepage_Contact_Content">
          <div className="Homepage_Contact_Content_Text">
            Tel: (210) 843-4253
          </div>

          <div className="Homepage_Contact_Content_Text">
            Ig: pham.minh.phuc
          </div>

          <div className="Homepage_Contact_Content_Text">
            Add: San Antonio, Texas
          </div>

          <div className="Homepage_Contact_Content_Text">
            Mail: phamminhphuc3673@gmail.com
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
      <div className="Homepage_Seperate4"></div>
      <div className="Homepage_footer">
        <Footer />
      </div>
    </div>
  ) : (
    <div className="Homepage">
      {popUp && (
        <div className="popUp">
          <div onClick={popUpImg} className="overlay"></div>
          <div
            onClick={popUpImg}
            className="popUP_Content"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "80%",
            }}
          ></div>
        </div>
      )}
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
        <img src={BgMP2} alt="" className="Homepage_Competition_Img_Bg" />
        <div className="Homepage_Competition_Img1"></div>
        <div className="Homepage_Competition_Img2"></div>
        <div className="Homepage_Competition_Img3"></div>
        <div className="Homepage_Competition_Img4"></div>
      </div>
      <div className="Homepage_Competition_Logo">
        <img src={BgMP3} alt="" className="Homepage_Competition_Logo_Bg" />
        <div className="Homepage_Competition_Logo_Container">
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
      </div>
      <div className="Homepage_Introduce">
        <img src={BgMP4} alt="" className="Homepage_Introduce_Bg" />
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
      </div>

      <div className="Homepage_Seperate2">
        <img src={BgMP5} alt="" className="Homepage_Seperate2_Bg" />
      </div>

      <div className="Homepage_About">
        <img src={BgMP6} alt="" className="Homepage_About_Bg" />
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
        <div className="Homepage_About_Button" onClick={linkToAbout}>
          <button className="Homepage_About_Button_Text">Read more</button>
        </div>
      </div>
      {/*
      <div className="Homepage_Achive">
        <img src={BgMP7} alt="" className="Homepage_Achive_Bg" />
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
          <div
            className="Homepage_Achive_Achive_Details"
            onClick={linkToAwards}
          >
            <div className="Homepage_Achive_Achive_Details_Button">
              View Details
            </div>
          </div>
        </div>
      </div>
      <div className="Homepage_Gallery">
        <img src={BgMP8} alt="" className="Homepage_Gallery_Bg" />
        <div className="Homepage_Gallery_Name">PHAM MINH PHUC</div>
        <div className="Homepage_Gallery_Title">GALLERY</div>
        <div className="Homepage_Gallery_Text">
          <div className="Homepage_Gallery_Text_Content">
            Minh's artistic journey began at a very young age,{" "}
            <div>
              when his fascination with drawing small objects sparked his
              creative spirit.
            </div>
          </div>
        </div>
        <div className="Homepage_Gallery_Img">
          <div className="Homepage_Gallery_Img_Styles">
            <div
              className={
                activeRealism
                  ? `Homepage_Gallery_Img_Styles_Style_Left active`
                  : `Homepage_Gallery_Img_Styles_Style_Left`
              }
              onClick={setRealism}
            >
              REALISM
            </div>
            <div
              className={
                activePortrait
                  ? `Homepage_Gallery_Img_Styles_Style active`
                  : `Homepage_Gallery_Img_Styles_Style`
              }
              onClick={setPortrait}
            >
              PORTRAIT
            </div>
            <div
              className={
                activeFineLine
                  ? `Homepage_Gallery_Img_Styles_Style_Right active`
                  : `Homepage_Gallery_Img_Styles_Style_Right`
              }
              onClick={setFineLine}
            >
              LINEWORK
            </div>
            <div
              className={
                activeColor
                  ? `Homepage_Gallery_Img_Styles_Style_Left active`
                  : `Homepage_Gallery_Img_Styles_Style_Left`
              }
              onClick={setColor}
            >
              COLOR
            </div>
            <div
              className={
                activeBlackGrey
                  ? `Homepage_Gallery_Img_Styles_Style active`
                  : `Homepage_Gallery_Img_Styles_Style`
              }
              onClick={setBlackGrey}
            >
              BLACK&GREY
            </div>
            <div
              className={
                activeAsian
                  ? `Homepage_Gallery_Img_Styles_Style_Right active`
                  : `Homepage_Gallery_Img_Styles_Style_Right`
              }
              onClick={setAsian}
            >
              ASIAN
            </div>
          </div>
          <div className="Homepage_Gallery_Img_Container ">{style}</div>
        </div>
        <div className="Homepage_Gallery_Button" onClick={linkToGallery}>
          <div className="Homepage_Gallery_Button_Text">View more</div>
        </div>
      </div>
      <div className="Homepage_Seperate3">
        <img src={BgMP9} alt="" className="Homepage_Seperate3_Bg" />
      </div>
      <div className="Homepage_Contact">
        <img src={BgMP10} alt="" className="Homepage_Contact_Bg" />
        <div className="Homepage_Contact_Title">CONTACT</div>
        <div className="Homepage_Contact_Content">
          <div className="Homepage_Contact_Content_Text">
            Tel: (210) 843-4253
          </div>

          <div className="Homepage_Contact_Content_Text">
            Ig: pham.minh.phuc
          </div>

          <div className="Homepage_Contact_Content_Text">
            Add: San Antonio, Texas
          </div>

          <div className="Homepage_Contact_Content_Text">
            Mail: phamminhphuc3673@gmail.com
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
      <div className="Homepage_Seperate4"></div>
      <div className="Homepage_footer">
        <Footer />
      </div>*/}
    </div>
  );
}

export default Homepage;
