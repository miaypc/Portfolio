import React from "react";
import styled from "styled-components";

import _Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import _Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Card = styled(_Card)`
  width: 500px;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 3vw;
  border: 1px solid #f0f0f0;
`;

const TypographyTitle = styled(_Typography)`
  color: #072f44;
  padding-bottom: 10px;
`;
const TypographyText = styled(_Typography)`
  color: #072f44;
  padding-bottom: 10px;
`;

function Cards(props) {
  return (
    <Card
      style={{
        backgroundColor: "#f0f0f0",
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
          <TypographyText>{props.about}</TypographyText>
          <TypographyText>{props.description}</TypographyText>
          <TypographyText>
            Technologies I used:
            <span
              style={{
                color: "#da611e",
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
                backgroundColor: "#da611e",
                color: "#072f44",
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
              backgroundColor: "#edd369",
              color: "#072f44",
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
