import React from "react";

import { Title } from "../../utils/GlobalStyle";
import { Carousel, CarouselItem } from "./Carousel/Carousel";
import { CrwnClothing } from "./Projects/CrwnClothing";
import { FocusTime } from "./Projects/FocusTime";
import { Gatito } from "./Projects/Gatito";
import { MealsToGo } from "./Projects/MealsToGo";
import { NetflixClone } from "./Projects/NetflixClone";
import { TargetAgrimensura } from "./Projects/TargetAgrimensura";
import { PortfolioContainer, ProjectsTitle } from "./style";

export const Portfolio = () => {
  return (
    <PortfolioContainer id="projects">
      <Title>Projects</Title>
      <ProjectsTitle>Web Applications</ProjectsTitle>
      <Carousel>
        <CarouselItem>
          <TargetAgrimensura />
        </CarouselItem>
        <CarouselItem>
          <CrwnClothing />
        </CarouselItem>
        <CarouselItem>
          <NetflixClone />
        </CarouselItem>
      </Carousel>
      <ProjectsTitle>Mobile Applications</ProjectsTitle>
      <Carousel>
        <CarouselItem>
          <MealsToGo />
        </CarouselItem>
        <CarouselItem>
          <FocusTime />
        </CarouselItem>
        <CarouselItem>
          <Gatito />
        </CarouselItem>
      </Carousel>
    </PortfolioContainer>
  );
};
