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
import FocusTimeImage from "../../../assets/FocusTime.webp";

export const FocusTime = () => {
  return (
    <>
      <Subtitle>Focus Time</Subtitle>
      <ProjectsContainer>
        <ContentImg>
          <ProjectImage src={FocusTimeImage} alt="Focus Time Screen" />
        </ContentImg>
        <ContentText>
          <Description>
            • Focus Time is an app for Android and iOS, developed using React
            Native and Expo to be a Pomodoro application.
          </Description>
          <ButtonContainer>
            <Button
              href="https://github.com/lucas-andrade94/react-native-focus-time"
              target="_blank"
            >
              View Code
            </Button>
          </ButtonContainer>
        </ContentText>
      </ProjectsContainer>
    </>
  );
};
