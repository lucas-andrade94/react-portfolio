import React from "react";

import { Title } from "../../utils/GlobalStyle";
import { FocusTime } from "./Projects/FocusTime";
import { Gatito } from "./Projects/Gatito";
import { MealsToGo } from "./Projects/MealsToGo";
import { NetflixClone } from "./Projects/NetflixClone";
import { TargetAgrimensura } from "./Projects/TargetAgrimensura";
import { PortfolioContainer } from "./style";

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Title>Portfolio</Title>
      <MealsToGo />
      <FocusTime />
      <Gatito />
      <TargetAgrimensura />
      <NetflixClone />
    </PortfolioContainer>
  );
};
