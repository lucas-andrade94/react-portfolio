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
import GatitoImage from "../../../assets/Gatito.gif";

export const Gatito = () => {
  return (
    <>
      <Subtitle>Gatito</Subtitle>
      <ProjectsContainerMobile>
        <ContentImg>
          <ProjectImageMobile src={GatitoImage} alt="Gatito Screen" />
        </ContentImg>
        <ContentText>
          <Description>
            &#x27A4;&nbsp; Gatito is a Pet Shop app for Android and iOS.
          </Description>
          <Description>
            &#x27A4;&nbsp; Stacks used: React Native and Expo.
          </Description>
          <ButtonContainerMobile>
            <Button
              href="https://github.com/lucas-andrade94/react-native-gatito"
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
