import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import Icons from "./Icons";
import IntroText from "./IntroText";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Toggle from "../Img/Toggle.svg";

const IntroductionContainer = styled.div`
  background-color: #072f44;
  backgroud-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Button = styled.button`
  cursor: pointer;
  font-family: sans-serif;
  text-align: center;
  text-decoration: none;
  border: none;
  color: #ffffff;
  background: #da611e;
  font-size: 30px;
  padding: 10px 20px;
  border-radius: 50px;
  margin: 5vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 5vh;
`;
const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Introduction() {
  return (
    <IntroductionContainer>
      <ToggleContainer>
        <img src={Toggle} />
      </ToggleContainer>
      <IntroText />
      <Icons />
      <ButtonContainer>
        <a href={Project.project}>
          <Button>Projects</Button>
        </a>
        <Button>About Me</Button>
      </ButtonContainer>
    </IntroductionContainer>
  );
}

export default Introduction;
