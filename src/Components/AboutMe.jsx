import React from "react";
import styled from "styled-components";
import Color from "../Utils/Color";

const H1 = styled.h1`
  letter-spacing: 1px;
  color: ${Color.Yellow};
  text-align: center;
  margin-bottom: 10vh;
  font-size: 55px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

  @media (prefers-color-scheme: light) {
    text-shadow: none;
    color: ${Color.Daisy};
  }
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

const P = styled.p`
  letter-spacing: 1px;
  color: ${Color.White};
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  margin-left: 15vw;
  margin-right: 15vw;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 25vh;

  @media (prefers-color-scheme: light) {
    color: ${Color.Navy};
    text-shadow: none;
  }
  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

function AboutMe() {
  return (
    <div>
      <H1>About Me</H1>
      <P>
        I am a committed and eager learner focused on becoming an accomplished
        software developer.
        <br />
        <br />
        My programming journey:
        <br />
        <br />
        In August 2019, I developed a strong interest in programming while
        playing with the Swift Playgrounds app on my iPad. I applied to the
        Introductory Web Development program of FrauenLoop in September 2019.
        The sessions ran 3 hours per week for 12 weeks at Microsoft Berlin.
        During the program I learned general technical knowledge and started to
        code my first website in HTML, CSS, and Bootstrap.
        <br />
        <br />
        Thanks to these most basic coding skills, I passed the challenges and
        interviews for the scholarship of The 5-month Full Stack Web Development
        program in Wild Code School in November 2019. This program started in
        Jaunary and covered JavaScript, NodeJS, Git, GitHub, Scrum, Express,
        Material UI React.js, MySQL, MongoDB etc.
        <br />
        <br />
        I've also worked with clients in the program during our last project -
        Workademy and two days Hackthon project - LacesUp.
      </P>
    </div>
  );
}
export default AboutMe;
