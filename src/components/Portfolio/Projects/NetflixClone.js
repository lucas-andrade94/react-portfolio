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
          <Description>
            &#x27A4;&nbsp; It is a Netflix Website's clone.
          </Description>
          <Description>
            &#x27A4;&nbsp; Stacks used: React, CSS and API from The Movie DB.
          </Description>
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
