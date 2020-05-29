import React from "react";
import styled from "styled-components";

const IntroTextContainer = styled.div`
  text-align: center;
  color: #ffffff;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
`;
const H1 = styled.h1`
  font-size: 60px;
  margin-top: 0;
  letter-spacing: 2px;
`;

function IntroText() {
  return (
    <IntroTextContainer>
      <H1>
        Hello, I'm <span style={{ color: "#edd369" }}> Mia </span>
      </H1>
      <h1 style={{ letterSpacing: "1px" }}>I am a web Developer </h1>
    </IntroTextContainer>
  );
}

export default IntroText;
