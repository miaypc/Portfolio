import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as _FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Color from "../Utils/Color";

const LinksContainer = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
`;
const FontAwesomeIcon = styled(_FontAwesomeIcon)`
  color: ${Color.Yellow};
  font-size: 50px;
  margin: 50px;
  @media (prefers-color-scheme: light) {
    color: ${Color.Daisy};
  }
  @media (max-width: 700px) {
    margin: 20px;
    font-size: 35px;
  }
`;

function Icons() {
  return (
    <LinksContainer>
      <a href="https://github.com/miaypc">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/miayin/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a href="https://drive.google.com/file/d/1kuMszq5CvgpcJfmyOmHWy8AfVWkYexPD/view?usp=sharing">
        <FontAwesomeIcon icon={faAddressCard} />
      </a>
      <a href="mailto:me@miayin.com?subject=SendMail&body=Description">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </LinksContainer>
  );
}
export default Icons;
