import React from "react";
import Typed from "react-typed";

import {
  HomeContainer,
  Intro,
  Name,
  SocialContainer,
  GitHub,
  LinkedIn,
  Email,
} from "./style";

const moment = require("moment");

const greetingTime = (timeNow) => {
  if (timeNow >= 5 && timeNow < 12) {
    return "MORNING";
  }

  if (timeNow >= 12 && timeNow < 17) {
    return "AFTERNOON";
  }

  if (timeNow >= 17 && timeNow < 19) {
    return "EVENING";
  }

  if (timeNow >= 19 || timeNow < 5) {
    return "NIGHT";
  }
};

export const Home = () => {
  let now = moment().format("HH");
  let nowNumber = parseInt(now);
  let greeting = greetingTime(nowNumber);

  return (
    <HomeContainer id="home">
      <Intro>GOOD {greeting}! I'M</Intro>
      <Name>LUCAS ANDRADE</Name>
      <Intro>
        A{" "}
        <Typed
          strings={["FRONT-END", "JAVASCRIPT", "REACT", "NODE"]}
          typeSpeed={75}
          backSpeed={50}
          loop
        />{" "}
        DEVELOPER
      </Intro>
      <SocialContainer>
        <a
          href="https://github.com/lucas-andrade94"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub sx={{ color: "#dddddd", fontSize: "2.50rem" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-silva-de-andrade/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn sx={{ color: "#dddddd", fontSize: "3rem" }} />
        </a>
        <a
          href="mailto:andradelucas94@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Email sx={{ color: "#dddddd", fontSize: "3.25rem" }} />
        </a>
      </SocialContainer>
    </HomeContainer>
  );
};
