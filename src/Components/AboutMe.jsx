import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  letter-spacing: 1px;
  color: #edd369;
  text-align: center;
  margin-bottom: 10vh;
  font-size: 50px;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;

const P = styled.p`
  letter-spacing: 1px;
  color: #ffffff;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  margin-left: 15vw;
  margin-right: 15vw;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 25vh;
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
        Workademy and two day Hacthon project - LacesUp.
      </P>
    </div>
  );
}
export default AboutMe;
