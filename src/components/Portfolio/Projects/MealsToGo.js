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
import MealsToGoImage from "../../../assets/MealsToGo.webp";

export const MealsToGo = () => {
  return (
    <>
      <Subtitle>Meals To Go</Subtitle>
      <ProjectsContainer>
        <ContentImg>
          <ProjectImage src={MealsToGoImage} alt="Meals To Go Screen" />
        </ContentImg>
        <ContentText>
          <Description>
            • Meals To Go is an app for Android and iOS, developed using React
            Native and Expo to simulate a delivery app such as Uber Eats.
          </Description>
          <Description>
            • To apply style to components was used Styled Components.
          </Description>
          <Description>
            • To manage registration and login was used Firebase.
          </Description>
          <ButtonContainer>
            <Button
              href="https://github.com/lucas-andrade94/react-native-MealsToGo"
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
