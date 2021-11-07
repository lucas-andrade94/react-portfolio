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
import MealsToGoImage from "../../../assets/MealsToGo.gif";

export const MealsToGo = () => {
  return (
    <>
      <Subtitle>Meals To Go</Subtitle>
      <ProjectsContainerMobile>
        <ContentImg>
          <ProjectImageMobile src={MealsToGoImage} alt="Meals To Go Screen" />
        </ContentImg>
        <ContentText>
          <Description>
            &#x27A4;&nbsp; Meals To Go simulate a Food Delivery app for Android
            and iOS.
          </Description>
          <Description>
            &#x27A4;&nbsp; Stacks used: React Native, Expo, Styled Components
            and Firebase.
          </Description>
          <ButtonContainerMobile>
            <Button
              href="https://github.com/lucas-andrade94/react-native-MealsToGo"
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
