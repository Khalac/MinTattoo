import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./GalleryPage.scss";

import { useEffect, useState, useRef } from "react";

import Conven from "../assets/Text/Conven.webp";
import Exper from "../assets/Text/Exper.webp";
import Trophies from "../assets/Text/Trophies.webp";

import PMP from "../assets/Text/PMP.webp";

function GalleryPage() {
  const [nameStyle, setNameStyle] = useState("Realism");
  const [style, setStyle] = useState();

  const [activeRealism, setActiveRealism] = useState(true);
  const [activeColor, setActiveColor] = useState(false);
  const [activeFineLine, setActiveFineLine] = useState(false);
  const [activeAsian, setActiveAsian] = useState(false);
  const [activeBlackGrey, setActiveBlackGrey] = useState(false);
  const [activePortrait, setActivePortrait] = useState(false);

  useEffect(() => {
    if (nameStyle === "Realism") setStyle(listImgRealism);
    if (nameStyle === "Color") setStyle(listImgColor);
    if (nameStyle === "FineLine") setStyle(listImgFineLine);
    if (nameStyle === "BlackGrey") setStyle(listImgBlackGrey);
    if (nameStyle === "Asian") setStyle(listImgAsian);
    if (nameStyle === "Portrait") setStyle(listImgPortrait);
  });
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
  for (let i = 1; i <= 15; ++i) {
    imgRealism.push(imagesRealism[`${i}.webp`]);
  }
  var realism = 0;
  const listImgRealism = imgRealism.map((img) => {
    realism++;
    return (
      <div className={`Realism_div_` + realism}>
        <img src={img} alt="" className={`Realism_` + realism}></img>{" "}
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
        <img src={img} alt="" className={`Portrait_` + portrait}></img>{" "}
      </div>
    );
  });

  const imagesColor = importAll(
    require.context("../assets/color", false, /\.webp$/)
  );
  let imgColor = [];
  for (let i = 1; i <= 30; ++i) {
    imgColor.push(imagesColor[`${i}.webp`]);
  }
  var color = 0;
  const listImgColor = imgColor.map((img) => {
    color++;
    return (
      <div className={`Color_div_` + color}>
        <img src={img} alt="" className={`Color_` + color}></img>{" "}
      </div>
    );
  });
  console.log(listImgColor);

  const imagesFineLine = importAll(
    require.context("../assets/fineline", false, /\.webp$/)
  );
  let imgFineLine = [];
  for (let i = 1; i <= 10; ++i) {
    imgFineLine.push(imagesFineLine[`${i}.webp`]);
  }
  var fineline = 0;
  const listImgFineLine = imgFineLine.map((img) => {
    fineline++;
    return (
      <div className={`FineLine_div_` + fineline}>
        <img src={img} alt="" className={`FineLine_` + fineline}></img>{" "}
      </div>
    );
  });

  const imagesBlackGrey = importAll(
    require.context("../assets/blackgrey", false, /\.webp$/)
  );
  let imgBlackGrey = [];
  for (let i = 1; i <= 25; ++i) {
    imgBlackGrey.push(imagesBlackGrey[`${i}.webp`]);
  }
  var blackgrey = 0;
  const listImgBlackGrey = imgBlackGrey.map((img) => {
    blackgrey++;
    return (
      <div className={`Blackgrey_div_` + blackgrey}>
        <img src={img} alt="" className={`Blackgrey_` + blackgrey}></img>{" "}
      </div>
    );
  });

  const imagesAsian = importAll(
    require.context("../assets/asian", false, /\.webp$/)
  );
  let imgAsian = [];
  for (let i = 1; i <= 9; ++i) {
    imgAsian.push(imagesAsian[`${i}.webp`]);
  }
  var asian = 0;
  const listImgAsian = imgAsian.map((img) => {
    asian++;
    return (
      <div className={`Asian_div_` + asian}>
        <img src={img} alt="" className={`Asian_` + asian}></img>{" "}
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

  const video1Ref = useRef();
  const video2Ref = useRef();
  const video3Ref = useRef();
  const [stop1, setStop1] = useState(true);
  const [stop2, setStop2] = useState(true);
  const [stop3, setStop3] = useState(true);

  const handleVideo1 = () => {
    setStop1(!stop1);
    if (stop1 === true) {
      video1Ref.current.pause();
    } else {
      video1Ref.current.play();
      video2Ref.current.pause();
      video3Ref.current.pause();
      setStop2(true);
      setStop3(true);
    }
  };
  const handleVideo2 = () => {
    setStop2(!stop2);
    if (stop2 === true) {
      video2Ref.current.pause();
    } else {
      video2Ref.current.play();
      video3Ref.current.pause();
      video1Ref.current.pause();
      setStop1(true);
      setStop3(true);
    }
  };
  const handleVideo3 = () => {
    setStop3(!stop3);
    if (stop3 === true) {
      video3Ref.current.pause();
    } else {
      video3Ref.current.play();
      video1Ref.current.pause();
      video2Ref.current.pause();
      setStop2(true);
      setStop1(true);
    }
  };
  return (
    <div className="GalleryPage">
      <div className="GalleryPage_Header">
        <Header />
      </div>
      <div className="GalleryPage_Title">
        <div className="GalleryPage_Title_Text1">
          <img src={PMP} alt="" className="GalleryPage_Title_Text1_Img" />
        </div>
        <div className="GalleryPage_Title_Text2">TATTOO GALLERY</div>
      </div>
      <div className="GalleryPage_Text">
        <div className="GalleryPage_Text_Content">
          <div className="GalleryPage_Text_Content1">
            Meet a talented individual named Minh, who hails from Vietnam and
            was born in 1999. At just 24 years old, he has already spent 7 years
            honing his craft as a tattoo artist.
          </div>
          <div className="GalleryPage_Text_Content2">
            Minh's artistic journey began at a very young age, when his
            fascination with drawing small objects sparked his creative spirit.
          </div>
        </div>
      </div>
      <div className="GalleryPage_Img">
        <div className="GalleryPage_Img_Styles">
          <div
            className={
              activeRealism
                ? `GalleryPage_Img_Styles_Style_Left active`
                : `GalleryPage_Img_Styles_Style_Left`
            }
            onClick={setRealism}
          >
            REALISM
          </div>
          <div
            className={
              activePortrait
                ? `GalleryPage_Img_Styles_Style active`
                : `GalleryPage_Img_Styles_Style`
            }
            onClick={setPortrait}
          >
            PORTRAI
          </div>
          <div
            className={
              activeFineLine
                ? `GalleryPage_Img_Styles_Style_Right active`
                : `GalleryPage_Img_Styles_Style_Right`
            }
            onClick={setFineLine}
          >
            FINE LINE
          </div>
          <div
            className={
              activeColor
                ? `GalleryPage_Img_Styles_Style_Left active`
                : `GalleryPage_Img_Styles_Style_Left`
            }
            onClick={setColor}
          >
            COLOR
          </div>
          <div
            className={
              activeBlackGrey
                ? `GalleryPage_Img_Styles_Style active`
                : `GalleryPage_Img_Styles_Style`
            }
            onClick={setBlackGrey}
          >
            BLACK&GREY
          </div>
          <div
            className={
              activeAsian
                ? `GalleryPage_Img_Styles_Style_Right active`
                : `GalleryPage_Img_Styles_Style_Right`
            }
            onClick={setAsian}
          >
            ASIAN
          </div>
        </div>
        <div className="GalleryPage_Img_Container">{style}</div>
      </div>
      <div className="GalleryPage_Video">
        <div className="GalleryPage_Video_Title">CHECK THIS OUT!!!</div>
        <div className="GalleryPage_Video_Video">
          <video
            className="GalleryPage_Video_Video_Control"
            controls
            muted
            preload="none"
            onClick={handleVideo1}
            ref={video1Ref}
          >
            <source
              src={require("../assets/video/1.MOV")}
              type="video/mp4"
              onClick={handleVideo1}
            />
            Your browser does not support the video tag.
          </video>
          <video
            className="GalleryPage_Video_Video_Control"
            controls
            muted
            preload="none"
            onClick={handleVideo2}
            ref={video2Ref}
          >
            <source
              src={require("../assets/video/main.mp4")}
              type="video/mp4"
              onClick={handleVideo2}
            />
            Your browser does not support the video tag.
          </video>
          <video
            className="GalleryPage_Video_Video_Control"
            controls
            muted
            preload="none"
            onClick={handleVideo3}
            ref={video3Ref}
          >
            <source
              src={require("../assets/video/1.MOV")}
              type="video/mp4"
              onClick={handleVideo3}
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="GalleryPage_Video_Text">
          <div className="GalleryPage_Video_Text_Border">
            <div className="GalleryPage_Video_Text_Border_Text">
              {" "}
              <div className="GalleryPage_Video_Text_Border_Text1">
                He finds inspiration in a multitude of genres, with a simple
                criterion: if it looks good, it captivates him. This constant
                desire to explore and learn keeps Minh open to new artistic
                horizons. His portfolio proudly showcases his expertise in Black
                and Grey realism, Color Realism, and a deep appreciation for
                Oriental style tattoos.{" "}
              </div>
              <div>
                Beyond these specialties, Minh is always ready to embrace and
                excel in any style requested by his clients. His dedication to
                his craft and his boundless creativity make him a remarkable
                tattoo artist, ready to turn your artistic visions into
                permanent masterpieces.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="GalleryPage_Pricing">
        <div className="GalleryPage_Pricing_Title">PRICING</div>
        <div className="GalleryPage_Pricing_Table">
          <div className="GalleryPage_Pricing_Table_Container">
            <div className="GalleryPage_Pricing_Table_Table1">
              Tattoo Inscription
            </div>
            <div className="GalleryPage_Pricing_Table_Table2">
              <div className="GalleryPage_Pricing_Table_Table2_Text">
                {" "}
                The Price depeands on the size and details of the sketch on the
                artist.
              </div>
            </div>
            <div className="GalleryPage_Pricing_Table_Table3">
              220$ per hours
            </div>
          </div>
        </div>
        <div className="GalleryPage_Pricing_Booking">
          <div className="GalleryPage_Pricing_Booking_Text1">
            TEXT ME FOR BOOKING OR MORE INFORMATION
          </div>
          <dvi className="GalleryPage_Pricing_Booking_Text2">
            (210) 843-4253
          </dvi>
        </div>
      </div>
      <div className="GalleryPage_Achive">
        <div className="GalleryPage_Achive_Content">
          <div className="GalleryPage_Achive_Achive_Convention">
            <img
              src={Conven}
              alt=""
              className="GalleryPage_Achive_Achive_Convention_Img"
            ></img>
            <div className="GalleryPage_Achive_Achive_Convention_Text">
              WORLD CONVENTION
            </div>
          </div>
          <div className="GalleryPage_Achive_Achive_YrsExper">
            <img
              src={Exper}
              alt=""
              className="GalleryPage_Achive_Achive_YrsExper_Img"
            ></img>
            <div className="GalleryPage_Achive_Achive_YrsExper_Text">
              YEARS EXPERIENCE
            </div>
          </div>
          <div className="GalleryPage_Achive_Achive_Trophies">
            <img
              src={Trophies}
              alt=""
              className="GalleryPage_Achive_Achive_Trophies_Img"
            ></img>
            <div className="GalleryPage_Achive_Achive_Trophies_Text">
              TROPHIES
            </div>
          </div>
        </div>
        <div className="GalleryPage_Achive_Text">
          <div className="GalleryPage_Achive_Text_Container">
            <div className="GalleryPage_Achive_Text_Container_Text1">
              VIEW ALL
            </div>
            <div className="GalleryPage_Achive_Text_Container_Text2">
              MINH’S THE BEST AWARDS!!!
            </div>
          </div>
        </div>
      </div>
      <div className="GalleryPage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default GalleryPage;
