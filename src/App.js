import React from "react";

import Introduction from "./Components/Introduction";
import styled from "styled-components";
import Project from "./Components/Project";
import AboutMe from "./Components/AboutMe";
import Color from "./Utils/Color";

const AppContainer = styled.div`
  background-color: ${Color.Navy};
  @media (prefers-color-scheme: light) {
    background-color: ${Color.Grey};
  }
`;

function App() {
  return (
    <AppContainer>
      <Introduction />
      <AboutMe />
      <Project />
    </AppContainer>
  );
}

export default App;
