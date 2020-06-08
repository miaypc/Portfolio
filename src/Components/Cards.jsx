import React from "react";
import styled from "styled-components";

import _Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import _Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Color from "../Utils/Color";

const Card = styled(_Card)`
  width: 500px;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 3vw;
  border: 1px solid #f0f0f0;
  @media (max-width: 700px) {
    margin-bottom: 8vw;
  }
`;

const TypographyTitle = styled(_Typography)`
  color: ${Color.Navy};
  padding-bottom: 10px;
`;
const TypographyText = styled(_Typography)`
  color: ${Color.Navy};
  padding-bottom: 10px;
`;

function Cards(props) {
  return (
    <Card
      style={{
        backgroundColor: `${Color.Grey}`,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ height: "400px" }}
          image={props.image}
        />
        <CardContent>
          <TypographyTitle style={{ fontSize: "30px" }}>
            {props.name}
          </TypographyTitle>
          <TypographyText>
            <a href={props.companyLink} style={{ marginRight: "5px" }}>
              {props.name}
            </a>
            {props.about}
          </TypographyText>
          <TypographyText>
            {props.description}
            <a
              href={props.apiLink}
              style={{ marginRight: "5px", marginLeft: "5px" }}
            >
              {props.api}
            </a>
            {props.description2}
          </TypographyText>
          <TypographyText>
            Technologies I used:
            <span
              style={{
                color: `${Color.Orange}`,
                marginLeft: "1vh",
              }}
            >
              {props.tech}
            </span>
          </TypographyText>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {props.demo ? (
          <a href={props.demo} style={{ textDecoration: "none" }}>
            <Button
              style={{
                backgroundColor: `${Color.Orange}`,
                color: `${Color.Navy}`,
              }}
            >
              Demo
            </Button>
          </a>
        ) : (
          ""
        )}

        <a href={props.github} style={{ textDecoration: "none" }}>
          <Button
            style={{
              backgroundColor: `${Color.Yellow}`,
              color: `${Color.Navy}`,
              textDecoration: "none",
            }}
          >
            GitHub
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default Cards;
