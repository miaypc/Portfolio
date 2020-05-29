import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Introduction from "./Components/Introduction";
import styled from "styled-components";
import Project from "./Components/Project";
import AboutMe from "./Components/AboutMe";
import { DarkThema, LightThema } from "./Utils/Theme";

const AppContainer = styled.div`
  background-color: #072f44;
`;

function App() {
  // const [theme, set] = useState("dark");

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  return (
    // <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
    <AppContainer>
      <Introduction />
      <AboutMe />
      <Project />
    </AppContainer>
    //</ThemeProvider>
  );
}

export default App;
