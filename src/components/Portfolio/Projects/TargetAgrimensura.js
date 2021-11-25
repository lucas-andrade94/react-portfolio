import React from "react";

import { Subtitle } from "../../../utils/GlobalStyle";
import {
  Button,
  ButtonContainer,
  ContentImg,
  ContentText,
  ProjectImage,
  ProjectsContainer,
  DescriptionProject,
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
          <DescriptionProject>
            &#x27A4;&nbsp; Website developed for a Brazilian Land Surveying
            company.
          </DescriptionProject>
          <DescriptionProject>
            &#x27A4;&nbsp; Stacks used: React, CSS, Material-UI and API from
            EmailJS.
          </DescriptionProject>
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
