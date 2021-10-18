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
import GatitoImage from "../../../assets/Gatito.webp";

export const Gatito = () => {
  return (
    <>
      <Subtitle>Gatito</Subtitle>
      <ProjectsContainer>
        <ContentImg>
          <ProjectImage src={GatitoImage} alt="Gatito Screen" />
        </ContentImg>
        <ContentText>
          <Description>
            • Gatito is an app for Android and iOS, developed using React
            Native and Expo to show Pet Shop services.
          </Description>
          <ButtonContainer>
            <Button
              href="https://github.com/lucas-andrade94/react-native-gatito"
              target="_blank"
            >
              View Code and Screens
            </Button>
          </ButtonContainer>
        </ContentText>
      </ProjectsContainer>
    </>
  );
};
