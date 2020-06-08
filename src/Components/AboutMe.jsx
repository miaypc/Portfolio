import React from "react";
import styled from "styled-components";
import Color from "../Utils/Color";

const H1 = styled.h1`
  letter-spacing: 1px;
  color: ${Color.Yellow};
  text-align: center;
  margin-bottom: 10vh;
  font-size: 55px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

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
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  margin-left: 15vw;
  margin-right: 15vw;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 3vh;
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
    <div style={{ marginBottom: "20vh" }}>
      <H1>About Me</H1>
      <P>
        I am a committed and eager learner focused on becoming an accomplished
        software developer.
      </P>
      <P>My programming journey:</P>
      <P>
        In August 2019, I developed a strong interest in programming while
        playing with the Swift Playgrounds app on my iPad. I applied to the
        Introductory Web Development program of
        <a
          href="https://www.frauenloop.org/"
          style={{ marginRight: "5px", marginLeft: "5px" }}
        >
          FrauenLoop
        </a>
        in September 2019. The sessions ran three hours per week for 12 weeks at
        Microsoft Berlin. During the program I learned general technical
        knowledge and started to code my first website using HTML, CSS, and
        Bootstrap.
      </P>
      <P>
        Thanks to these most basic coding skills, I passed the challenges and
        interviews to earn a full scholarship to attend a five-month Full Stack
        Web Development program at
        <a
          href="https://www.wildcodeschool.com/en-GB"
          style={{ marginRight: "5px", marginLeft: "5px" }}
        >
          Wild Code School (WCS)
        </a>
        in November 2019. This program started in January and covered
        JavaScript, Node.js, SCSS, styled-components, Material UI, React.js,
        Git, GitHub, Express, MySQL, Postman, MongoDB, and Scrum.
      </P>
      <P>
        At WCS, I gained a lot of experience working with external clients. I
        helped LacesUp extend their e-commerce website to show previews of how
        their shoelaces would look on shoes. I also worked with Workademy on a
        two-month project in which I helped them build an online course-building
        website for teachers.
      </P>
    </div>
  );
}
export default AboutMe;
