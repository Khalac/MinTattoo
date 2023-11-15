import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AwardsPage.scss";

import Conven from "../assets/Text/Conven.webp";
import Exper from "../assets/Text/Exper.webp";
import Trophies from "../assets/Text/Trophies.webp";

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

import { BsFillStarFill } from "react-icons/bs";

import BgAW1 from "../assets/bg/bg1/awards/1.png";
import BgAW2 from "../assets/bg/bg1/awards/2.png";
import BgAW3 from "../assets/bg/bg1/awards/3.png";

function AwardsPage() {
  const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
  return isMobile ? (
    <div className="Awardspage">
      <div className="Awardspage_Header">
        <Header />
      </div>
      <div className="Awardspage_Achive">
        <img src={BgAW1} alt="" className="Awardspage_Achive_Bg" />
        <div className="Awardspage_Achive_Pagename">AWARDS</div>
        <div className="Awardspage_Achive_Title">
          <div className="Awardspage_Achive_Title1">WHY YOU SHOULD</div>
          <div className="Awardspage_Achive_Title2_Border">
            <div className="Awardspage_Achive_Title2">CHOOSE ME?</div>
          </div>
        </div>
        <div className="Awardspage_Achive_Text">
          <div className="Awardspage_Achive_Text_Content">
            {" "}
            I have a very strong portfolio about realism either black and grey
            or color. With the knowledge and experience from 2 cultures, I will
            bring you cutting edge art piece, from design to reality.
          </div>
        </div>
        <div className="Awardspage_Achive_Achive">
          <div className="Awardspage_Achive_Achive_Content">
            <div className="Awardspage_Achive_Achive_Convention">
              <img
                src={Conven}
                alt=""
                className="Awardspage_Achive_Achive_Convention_Img"
              ></img>
              <div className="Awardspage_Achive_Achive_Convention_Text">
                WORLD CONVENTION
              </div>
            </div>
            <div className="Awardspage_Achive_Achive_YrsExper">
              <img
                src={Exper}
                alt=""
                className="Awardspage_Achive_Achive_YrsExper_Img"
              ></img>
              <div className="Awardspage_Achive_Achive_YrsExper_Text">
                YEARS EXPERIENCE
              </div>
            </div>
            <div className="Awardspage_Achive_Achive_Trophies">
              <img
                src={Trophies}
                alt=""
                className="Awardspage_Achive_Achive_Trophies_Img"
              ></img>
              <div className="Awardspage_Achive_Achive_Trophies_Text">
                TROPHIES
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Awards_Awards">
        <img src={BgAW2} alt="" className="Awards_Awards_Bg" />
        <div className="Awards_Awards_Title">
          <div className="Awards_Awards_Title_Title1">
            <div className="Awards_Awards_Title_Title1_Box">MINH PHAM'S</div>
          </div>
          <div className="Awards_Awards_Title_Title2">
            <div className="Awards_Awards_Title_Title2_Box">AWARDS WON</div>
          </div>
        </div>
        <div className="Awards_Awards_Competition_Logo">
          <div className="Awards_Awards_Competition_Logo_Container1">
            <img src={lgcom1} alt="Logo" className="Competition_Logo1"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container2">
            <img src={lgcom2} alt="Logo" className="Competition_Logo2"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container3">
            <img src={lgcom3} alt="Logo" className="Competition_Logo3"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container4">
            <img src={lgcom4} alt="Logo" className="Competition_Logo4"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container5">
            <img src={lgcom5} alt="Logo" className="Competition_Logo5"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container6">
            <img src={lgcom6} alt="Logo" className="Competition_Logo6"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container7">
            <img src={lgcom7} alt="Logo" className="Competition_Logo7"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container8">
            <img src={lgcom8} alt="Logo" className="Competition_Logo8"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container9">
            <img src={lgcom9} alt="Logo" className="Competition_Logo9"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container10">
            <img src={lgcom10} alt="Logo" className="Competition_Logo10"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container11">
            <img src={lgcom11} alt="Logo" className="Competition_Logo11"></img>
          </div>
        </div>
      </div>
      <div className="Awardspage_List">
        <img src={BgAW3} alt="" className="Awardspage_List_Bg" />
        <div className="Awardspage_List_Border">
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content_1">
                BEST OF SMALL COLOR FEMALE
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Villian Arts - Houston 2021
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF SHOW
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Villian Arts - Houston 2021
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF SHOW
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Land of Ink - Bangkok 2022
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                MINIMAL COLOR
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Land of Ink - Bangkok 2022
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">3rd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                SMALL JOB BLACK AND GREY
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Land of Ink - Bangkok 2022
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF SHOW
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Body Art Expo - Los Angeles 2023
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                PORTRAIT
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Star of Texas - Austin 2023
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">HORROR</div>
              <div className="Awardspage_List_Border_Item_Content2">
                Star of Texas - Austin 2023
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">3rd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                LARGE BLACK AND GREY
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Star of Texas - Austin 2023
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF SHOW
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Palm City Tattoo Expo - McAllen 2023
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                CICATRIZADO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Pachamama Convention- Peru
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF GRANDES
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Pièces Epinal Show - France
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                COLORIDO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Expo Tattoo Brasília - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                CICATRIZADO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Expo Tattoo Brasília - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                ORIENTAL
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Expo Tattoo Brasília - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                MELHOR DO EVENTO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Expo Tattoo Brasília - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">Top3</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">COLOR</div>
              <div className="Awardspage_List_Border_Item_Content2">
                Tattoo Collectors Expo - Dallas, USA
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">
              <BsFillStarFill />
            </div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST ASIAN
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Tattoo Collectors Expo - Dallas, USA
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST ORIENTA
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Tattoo Week - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                MELHOR DO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Evento Tattoo Week - Brazi
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST COMIC STYLE
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Mayagna Convention - Nicaragua
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST ORIENTAL
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Inksane Tattoo Fest V - Puerto Rico
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OVER ALL
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Inksane Tattoo Fest V - Puerto Rico
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">
              <BsFillStarFill />
            </div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF SHOW
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Inksane Tattoo Fest V - Puerto Rico
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                ARTE FUSION
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Cangaco Tattoo Ink - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">
              <BsFillStarFill />
            </div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                MELHOR DO EVENTO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Cangaco Tattoo Ink - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                REALISMO COLORIDO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Cangaco Tattoo Ink - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                FECHAMENTO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Cangaco Tattoo Ink - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                FREE HAND
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Cangaco Tattoo Ink - Brazil
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Awardspage_Footer">
        <Footer />
      </div>
    </div>
  ) : (
    <div className="Awardspage">
      <div className="Awardspage_Header">
        <Header />
      </div>
      <div className="Awardspage_Achive">
        <div className="Awardspage_Achive_Title">
          <div className="Awardspage_Achive_Title1">WHY YOU SHOULD</div>

          <div className="Awardspage_Achive_Title2">CHOOSE ME?</div>
        </div>
        <div className="Awardspage_Achive_Text">
          <div className="Awardspage_Achive_Text_Content">
            {" "}
            I have a very strong portfolio about realism either black and grey
            or color. With the knowledge and experience from 2 cultures, I will
            bring you cutting edge art piece, from design to reality.
          </div>
        </div>
        <div className="Awardspage_Achive_Achive">
          <div className="Awardspage_Achive_Achive_Content">
            <div className="Awardspage_Achive_Achive_Convention">
              <div className="Awardspage_Achive_Achive_Convention_Img_Container">
                <img
                  src={Conven}
                  alt=""
                  className="Awardspage_Achive_Achive_Convention_Img"
                ></img>
              </div>

              <div className="Awardspage_Achive_Achive_Convention_Text">
                WORLD CONVENTION
              </div>
              <div className="Awardspage_Achive_Achive_Convention_Text_Detail">
                Minh has competed in and won many competitions, all across the
                States and the world.{" "}
              </div>
            </div>
            <div className="Awardspage_Achive_Achive_YrsExper">
              <div className="Awardspage_Achive_Achive_YrsExper_Img_Container">
                <img
                  src={Exper}
                  alt=""
                  className="Awardspage_Achive_Achive_YrsExper_Img"
                ></img>
              </div>

              <div className="Awardspage_Achive_Achive_YrsExper_Text">
                YEARS EXPERIENCE
              </div>
              <div className="Awardspage_Achive_Achive_YrsExper_Text_Detail">
                Minh did his first tattoo when he was 16 and since then he got
                hooked on how to create perfect tattoos.
              </div>
            </div>
            <div className="Awardspage_Achive_Achive_Trophies">
              <div className="Awardspage_Achive_Achive_Trophies_Img_Container">
                <img
                  src={Trophies}
                  alt=""
                  className="Awardspage_Achive_Achive_Trophies_Img"
                ></img>
              </div>

              <div className="Awardspage_Achive_Achive_Trophies_Text">
                TROPHIES AWARDS
              </div>
              <div className="Awardspage_Achive_Achive_Trophies_Text_Detail">
                Minh dedication to his craft and boundless creativity make him a
                remarkable tattoo artist.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Awards_Seperate1"></div>
      <div className="Awards_Awards">
        <div className="Awards_Awards_Competition_Logo">
          <div className="Awards_Awards_Competition_Logo_Container1">
            <img src={lgcom1} alt="Logo" className="Competition_Logo1"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container2">
            <img src={lgcom2} alt="Logo" className="Competition_Logo2"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container3">
            <img src={lgcom3} alt="Logo" className="Competition_Logo3"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container4">
            <img src={lgcom4} alt="Logo" className="Competition_Logo4"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container5">
            <img src={lgcom5} alt="Logo" className="Competition_Logo5"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container6">
            <img src={lgcom6} alt="Logo" className="Competition_Logo6"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container7">
            <img src={lgcom7} alt="Logo" className="Competition_Logo7"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container8">
            <img src={lgcom8} alt="Logo" className="Competition_Logo8"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container9">
            <img src={lgcom9} alt="Logo" className="Competition_Logo9"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container10">
            <img src={lgcom10} alt="Logo" className="Competition_Logo10"></img>
          </div>
          <div className="Awards_Awards_Competition_Logo_Container11">
            <img src={lgcom11} alt="Logo" className="Competition_Logo11"></img>
          </div>
        </div>
      </div>
      <div className="Awardspage_List">
        <div className="Awardspage_List_Title">
          <div className="Awardspage_List_Title_Title1">
            <div className="Awardspage_List_Title_Title1_Box">MINH PHAM'S</div>
          </div>
          <div className="Awardspage_List_Title_Title2">
            <div className="Awardspage_List_Title_Title2_Box">AWARDS WON</div>
          </div>
        </div>
        <div className="Awardspage_List_Border">
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content_1">
                BEST OF SMALL COLOR FEMALE
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Villian Arts - Houston 2021
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF SHOW
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Villian Arts - Houston 2021
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF SHOW
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Land of Ink - Bangkok 2022
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                MINIMAL COLOR
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Land of Ink - Bangkok 2022
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">3rd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                SMALL JOB BLACK AND GREY
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Land of Ink - Bangkok 2022
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF SHOW
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Body Art Expo - Los Angeles 2023
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                PORTRAIT
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Star of Texas - Austin 2023
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">HORROR</div>
              <div className="Awardspage_List_Border_Item_Content2">
                Star of Texas - Austin 2023
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">3rd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                LARGE BLACK AND GREY
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Star of Texas - Austin 2023
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF SHOW
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Palm City Tattoo Expo - McAllen 2023
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                CICATRIZADO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Pachamama Convention- Peru
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF GRANDES
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Pièces Epinal Show - France
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                COLORIDO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Expo Tattoo Brasília - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                CICATRIZADO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Expo Tattoo Brasília - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                ORIENTAL
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Expo Tattoo Brasília - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                MELHOR DO EVENTO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Expo Tattoo Brasília - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">Top3</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">COLOR</div>
              <div className="Awardspage_List_Border_Item_Content2">
                Tattoo Collectors Expo - Dallas, USA
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">
              <BsFillStarFill />
            </div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST ASIAN
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Tattoo Collectors Expo - Dallas, USA
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST ORIENTA
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Tattoo Week - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                MELHOR DO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Evento Tattoo Week - Brazi
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST COMIC STYLE
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Mayagna Convention - Nicaragua
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST ORIENTAL
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Inksane Tattoo Fest V - Puerto Rico
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OVER ALL
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Inksane Tattoo Fest V - Puerto Rico
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">
              <BsFillStarFill />
            </div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                BEST OF SHOW
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Inksane Tattoo Fest V - Puerto Rico
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                ARTE FUSION
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Cangaco Tattoo Ink - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">
              <BsFillStarFill />
            </div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                MELHOR DO EVENTO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Cangaco Tattoo Ink - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">2nd</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                REALISMO COLORIDO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Cangaco Tattoo Ink - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                FECHAMENTO
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Cangaco Tattoo Ink - Brazil
              </div>
            </div>
          </div>
          <div className="Awardspage_List_Border_Item">
            <div className="Awardspage_List_Border_Item_Prize">1st</div>
            <div className="Awardspage_List_Border_Item_Content">
              <div className="Awardspage_List_Border_Item_Content1">
                FREE HAND
              </div>
              <div className="Awardspage_List_Border_Item_Content2">
                Cangaco Tattoo Ink - Brazil
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Awardspage_Seperate2"></div>
      <div className="Awardspage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default AwardsPage;
