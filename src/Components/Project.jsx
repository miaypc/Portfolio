import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import { ProjectList } from "./ProjectList";
import Color from "../Utils/Color";

const ProjectContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  margin-top: 1vh;
  flex-wrap: wrap;
  padding-bottom: 10vh;
`;

const H1 = styled.h1`
  letter-spacing: 1px;
  color: ${Color.Yellow};
  text-align: center;
  margin-bottom: 15vh;
  font-size: 55px;
  //text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  @media (prefers-color-scheme: light) {
    text-shadow: none;
    color: ${Color.Daisy};
  }
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

function Project() {
  return (
    <div id="project">
      <H1>My Projects</H1>
      <ProjectContainer>
        {ProjectList.map((e) => {
          return (
            <Cards
              description={e.description}
              about={e.about}
              tech={e.tech}
              name={e.name}
              image={e.img}
              github={e.github}
              demo={e.demo}
            />
          );
        })}
      </ProjectContainer>
    </div>
  );
}

export default Project;
