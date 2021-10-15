import React from "react";

import { Description, Subtitle } from "../../../utils/GlobalStyle";
import {
  Button,
  ButtonContainer,
  ContentImg,
  ContentText,
  ProjectImage,
  ProjectsContainer,
  Link,
} from "../style";
import NetflixCloneImage from "../../../assets/NetflixClone.webp";

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
            • That website was developed using React, HTML5 and CSS3 during a
            React class.
          </Description>
          <Description>
            • Data provided by API from <Link href="https://www.themoviedb.org/">&nbsp;The Movie DB</Link>.
          </Description>
          <ButtonContainer>
            <Button
              href="https://github.com/lucas-andrade94/Netflix-WebsiteClone"
              target="_blank"
            >
              View Code
            </Button>
            <Button
              href="https://netflix-website-clone.herokuapp.com/"
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
