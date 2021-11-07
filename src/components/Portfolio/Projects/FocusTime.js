import React from "react";

import { Description, Subtitle } from "../../../utils/GlobalStyle";
import {
  Button,
  ButtonContainerMobile,
  ContentImg,
  ContentText,
  ProjectImageMobile,
  ProjectsContainerMobile,
} from "../style";
import FocusTimeImage from "../../../assets/FocusTime.gif";

export const FocusTime = () => {
  return (
    <>
      <Subtitle>Focus Time</Subtitle>
      <ProjectsContainerMobile>
        <ContentImg>
          <ProjectImageMobile src={FocusTimeImage} alt="Focus Time Screen" />
        </ContentImg>
        <ContentText>
          <Description>
            &#x27A4;&nbsp; Focus Time is a Pomodoro app for Android and iOS.
          </Description>
          <Description>
            &#x27A4;&nbsp; Stacks used: React Native and Expo.
          </Description>
          <ButtonContainerMobile>
            <Button
              href="https://github.com/lucas-andrade94/react-native-focus-time"
              target="_blank"
            >
              View Code and Screens
            </Button>
          </ButtonContainerMobile>
        </ContentText>
      </ProjectsContainerMobile>
    </>
  );
};
