import React from "react";
import IntroductionContainer from "./Components/Introduction";
import styled from "styled-components";
import Project from "./Components/Project";
import AboutMe from "./Components/AboutMe";

const AppContainer = styled.div`
  background-color: #072f44;
`;

function App() {
  return (
    <AppContainer>
      <IntroductionContainer />
      <AboutMe />
      <Project />
    </AppContainer>
  );
}

export default App;
