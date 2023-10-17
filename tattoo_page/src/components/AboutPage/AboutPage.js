import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <div className="AboutPage">
      {/* <div className="AboutPage_header">
        <Header />
      </div>
      <div className="Author_name">PHAM MINH PHUC</div>
      <div className="About_text">
        <div className="About_img"></div>
        <p className="para">
          Hi, my name is Minh. I am Vietnamese born (1999) and raised. For the
          past 10 years, nothing has been more important to me than becoming a
          master inker.
        </p>
        <p className="para_bg">My Background</p>
        <p className="para">
          I did my first tattoo when I was 16 and since then I got hooked on how
          to create perfect tattoos. At 18 years old I enrolled in university to
          learn graphic design as I thought it was the right path, but 2 years
          later (2019) I moved to the United States so I was unable to complete
          my degree.
        </p>
        <p className="para">
          This move was the turning point of my life, it brought so many
          challenges that required serious adjustment. But, fortune favors the
          brave, I still managed to land a job at one of the best tattoo shop in
          the city, the Firme Copias San Antonio, Texas. Since then, my life
          changed forever, I met and learned from some of best and most amazing
          artists in town, and with self-learning about original art and digital
          art, my skillset has improved rapidly. So much so that I have competed
          in and won many competitions, all across the States and the world.
        </p>
        <p className="para">
          I have a very strong portfolio about realism either black and grey or
          color. With the knowledge and experience from 2 cultures, I will bring
          you cutting edge art piece, from design to reality.
        </p>
        <p className="para">
          This is my story, and my story will continue to be written.
        </p>
        <p className="para_end">On your skin</p>
        <p className="para_end">Let’s do this!!!</p>
        <p className="para">
          <p className="para_prize">Minh Pham’s Awards Won:</p>
          <ul>
            <li>
              <span className="para_prize_tilte">
                1st Best of Small Color Female
              </span>{" "}
              Villian Arts - Houston 2021
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">2nd Best of Show</span> Villian
              Arts - Houston 2021
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Best of Show</span> Land of
              Ink - Bangkok 2022
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">2nd Minimal Color</span> Land
              of Ink - Bangkok 2022
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">
                3rd Small Job Black and Grey
              </span>{" "}
              Land of Ink- Bangkok 2022
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Best of Show</span> Body
              Art Expo - Los Angeles 2023
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Portrait</span> Star of
              Texas - Austin 2023
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">2nd Horror</span> Star of Texas
              - Austin 2023
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">
                3rd Large Black and Grey
              </span>{" "}
              Star of Texas - Austin 2023
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Best of Show</span> Palm
              City Tattoo Expo - McAllen 2023
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Cicatrizado</span>{" "}
              Pachamama Convention- Peru{" "}
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">2nd Best of Grandes</span>{" "}
              Pièces Epinal Show - France
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Colorido</span> Expo Tattoo
              Brasília - Brazil
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Cicatrizado</span> Expo
              Tattoo Brasília - Brazil
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">2nd Oriental</span> Expo Tattoo
              Brasília - Brazil
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">
                1st Melhor do Evento
              </span>{" "}
              Expo Tattoo Brasília Brazil
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">Top 3 Color</span> Tattoo
              Collectors Expo - Dallas, USA
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">Best Asian</span> Tattoo
              Collectors Expo - Dallas, USA
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Best Oriental</span> Tattoo
              Week - Brazil
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Melhor do</span> Evento
              Tattoo Week - Brazil
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">
                1st Best Comic Style
              </span>{" "}
              Mayagna Convention - Nicaragua
            </li>

            <li>
              {" "}
              <span className="para_prize_tilte">1st Best Oriental</span>{" "}
              Inksane Tattoo Fest V - Puerto Rico
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Best Over all</span>{" "}
              Inksane Tattoo Fest V - Puerto Rico
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">Best of Show</span> Inksane
              Tattoo Fest V - Puerto Rico
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Arte Fusion</span> Cangaco
              Tattoo Ink - Brazil
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">Melhor do Evento</span> Cangaco
              Tattoo Ink - Brazil
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">
                2nd Realismo Colorido
              </span>{" "}
              Cangaco Tattoo Ink - Brazil
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Fechamento</span> Cangaco
              Tattoo Ink - Brazil
            </li>
            <li>
              {" "}
              <span className="para_prize_tilte">1st Free Hand</span> Cangaco
              Tattoo Ink - Brazil
            </li>
          </ul>
        </p>
      </div>
      <div className="AboutPage_footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default AboutPage;
