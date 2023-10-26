import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AboutPage.scss";

import BgAB1 from "../assets/bg/bg1/about/1.png";
import BgAB2 from "../assets/bg/bg1/about/2.png";
import BgAB3 from "../assets/bg/bg1/about/3.png";
import BgAB4 from "../assets/bg/bg1/about/4.png";

function AboutPage() {
  return (
    <div className="Aboutpage">
      <div className="Aboutpage_Header">
        <Header />
      </div>
      <div className="Aboutpage_About1">
        <img src={BgAB1} alt="" className="Aboutpage_About1_Bg" />
        <div className="Aboutpage_About_Title">
          <div className="Aboutpage_About_Title1">
            ABOUT
            <div className="Aboutpage_About_Title_Img"></div>
          </div>
          <div className="Aboutpage_About_Title2"> ME</div>
        </div>
        <div className="Aboutpage_About_Text">
          <div className="Aboutpage_About_Text1">Hi, my name is Minh.</div>
          <div className="Aboutpage_About_Text2">
            I am Vietnamese born (1999) and raised. For the past 10 years,
            nothing has been more important to me than becoming a master inker.
          </div>
        </div>
      </div>
      <div className="Aboutpage_About2">
        <div className="Aboutpage_About2_Img"></div>
        <div className="Aboutpage_About2_Text">
          <img src={BgAB2} alt="" className="Aboutpage_About2_Text_Bg" />
          <div className="Aboutpage_About2_Text_Content">
            {" "}
            I did my first tattoo when I was 16 and since then I got hooked on
            how to create perfect tattoos. At 18 years old I enrolled in
            university to learn graphic design as I thought it was the right
            path, but 2 years later (2019) I moved to the United States so I was
            unable to complete my degree.
          </div>
        </div>
      </div>
      <div className="Aboutpage_About3">
        <img src={BgAB3} alt="" className="Aboutpage_About3_Bg" />
        <div className="Aboutpage_About3_Img"></div>
        <div className="Aboutpage_About3_Text">
          <div className="Aboutpage_About3_Text_Content">
            {" "}
            This move was the turning point of my life, it brought so many
            challenges that required serious adjustment.
            <div>
              But, fortune favors the brave, I still managed to land a job at
              one of the best tattoo shop in the city, the Firme Copias San
              Antonio, Texas.
            </div>
          </div>
        </div>
      </div>
      <div className="Aboutpage_About4">
        <img src={BgAB4} alt="" className="Aboutpage_About4_Bg" />
        <div className="Aboutpage_About4_Text">
          <div className="Aboutpage_About4_Text_Content">
            {" "}
            Since then, my lifechanged forever, I met and learned from some of
            best and most amazing artists in town, and with self-learning about
            original art and digital art, my skil set has improved rapidly.{" "}
            <div>
              So much so that I have competed in and won many competitions, all
              across the States and the world.
            </div>
          </div>
        </div>
        <div className="Aboutpage_About4_Img"></div>
      </div>
      <div className="Aboutpage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
