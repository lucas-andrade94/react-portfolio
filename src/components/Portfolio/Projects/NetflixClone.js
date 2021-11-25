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
import NetflixCloneImage from "../../../assets/NetflixClone.gif";

export const NetflixClone = () => {
  return (
    <>
      <Subtitle>Netflix Clone</Subtitle>
      <ProjectsContainer>
        <ContentImg>
          <ProjectImage src={NetflixCloneImage} alt="Netflix Clone Screen" />
        </ContentImg>
        <ContentText>
          <DescriptionProject>
            &#x27A4;&nbsp; Simulates the Netflix Website using a movie database.
          </DescriptionProject>
          <DescriptionProject>
            &#x27A4;&nbsp; Stacks used: React, CSS and API from The Movie DB.
          </DescriptionProject>
          <ButtonContainer>
            <Button
              href="https://github.com/lucas-andrade94/Netflix-WebsiteClone"
              target="_blank"
            >
              View Code
            </Button>
            <Button
              href="https://netflix-clone-lucas-andrade.netlify.app/"
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
