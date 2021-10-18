import React from "react";

import { HomeContainer, Intro, Name } from "./style";

const moment = require("moment");

const greetingTime = (timeNow) => {
  if (timeNow >= 5 && timeNow < 12) {
    return "MORNING";
  }

  if (timeNow < 17) {
    return "AFTERNOON";
  }

  if (timeNow < 19) {
    return "EVENING";
  }

  if (timeNow >= 19 && timeNow < 5) {
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
      <Intro>A FRONT-END DEVELOPER</Intro>
    </HomeContainer>
  );
};
