import React from "react";
import styled from "styled-components";

import Icons from "./Icons";
import IntroText from "./IntroText";
import Color from "../Utils/Color";

const IntroductionContainer = styled.div`
  background-color: ${Color.Navy};
  @media (prefers-color-scheme: light) {
    background-color: ${Color.Grey};
  }
  backgroud-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

function Introduction() {
  return (
    <IntroductionContainer>
      <IntroText />
      <Icons />
    </IntroductionContainer>
  );
}

export default Introduction;
