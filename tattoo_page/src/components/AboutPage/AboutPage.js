import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="AboutPage_header">
        <Header />
      </div>
      <div className="Author_name">Minh Phuc Pham</div>
      <div className="About_text">
        <p className="para">
          Hi, my name is Minh. I am Vietnamese born (1999) and raised. For the
          past 10 years, nothing has been more important to me than becoming a
          master inker.
        </p>
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
          Minh Pham’s Awards Won:
          <ul>
            <li>1st Best of Small Color Female Villian Arts - Houston 2021</li>
            <li>2nd Best of Show Villian Arts - Houston 2021</li>
            <li>1st Best of Show Land of Ink - Bangkok 2022</li>
            <li>2nd Minimal Color Land of Ink - Bangkok 2022</li>
            <li>3rd Small Job Black and Grey Land of Ink- Bangkok 2022</li>
            <li>1st Best of Show Body Art Expo - Los Angeles 2023</li>
            <li>1st Portrait Star of Texas - Austin 2023</li>
            <li>2nd Horror Star of Texas - Austin 2023</li>
            <li>3rd Large Black and Grey Star of Texas - Austin 2023</li>
            <li>1st Best of Show Palm City Tattoo Expo - McAllen 2023</li>
            <li>st Cicatrizado Pachamama Convention- Peru </li>
            <li>2nd Best of Grandes Pièces Epinal Show - France</li>
            <li>1st Colorido Expo Tattoo Brasília - Brazil</li>
            <li>1st Cicatrizado Expo Tattoo Brasília - Brazil</li>
            <li>2nd Oriental Expo Tattoo Brasília - Brazil</li>
            <li>1st Melhor do Evento Expo Tattoo Brasília Brazil</li>
          </ul>
        </p>
      </div>
      <div className="AboutPage_footer">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
