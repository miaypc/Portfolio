import React from "react";
import styled from "styled-components";
import Color from "../Utils/Color";

const IntroTextContainer = styled.div`
  text-align: center;
  color: ${Color.White};
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin-top: 5vh;

  @media (prefers-color-scheme: light) {
    color: ${Color.Navy};
    text-shadow: none;
  }
`;
const H1 = styled.h1`
  font-size: 65px;
  margin-top: 0;
  letter-spacing: 2px;

  @media (max-width: 700px) {
    font-size: 50px;
    letter-spacing: 1px;
  }
`;

const Span = styled.span`
  color: ${Color.Yellow};
  @media (prefers-color-scheme: light) {
    color: ${Color.Daisy};
  }
`;

const H1Small = styled.h1`
  letter-spacing: 1px;
  @media (max-width: 700px) {
    font-size: 20px;
    letter-spacing: 0.8px;
  }
`;

function IntroText() {
  return (
    <IntroTextContainer>
      <H1>
        Hello, I'm <Span> Mia </Span>
      </H1>
      <H1Small>I am a web developer </H1Small>
    </IntroTextContainer>
  );
}

export default IntroText;
