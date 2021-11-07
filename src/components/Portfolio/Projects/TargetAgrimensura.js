import React from "react";

import { Description, Subtitle } from "../../../utils/GlobalStyle";
import {
  Button,
  ButtonContainer,
  ContentImg,
  ContentText,
  ProjectImage,
  ProjectsContainer,
} from "../style";
import TargetAgrimensuraImage from "../../../assets/TargetAgrimensura.gif";

export const TargetAgrimensura = () => {
  return (
    <>
      <Subtitle>Target Agrimensura</Subtitle>
      <ProjectsContainer>
        <ContentImg>
          <ProjectImage
            src={TargetAgrimensuraImage}
            alt="Target Agrimensura Screen"
          />
        </ContentImg>
        <ContentText>
          <Description>
            &#x27A4;&nbsp; It is a website developed for a Brazilian Land Surveying company.
          </Description>
          <Description>
            &#x27A4;&nbsp; Stacks used: React, CSS, Material-UI and API from EmailJS.
          </Description>
          <ButtonContainer>
            <Button
              href="https://github.com/lucas-andrade94/Target-Agrimensura-Website"
              target="_blank"
            >
              View Code
            </Button>
            <Button
              href="https://target-agrimensura.netlify.app/"
              target="_blank"
            >
              View Project
            </Button>
          </ButtonContainer>
        </ContentText>
      </ProjectsContainer>
    </>
  );
};
