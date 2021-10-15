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
import TargetAgrimensuraImage from "../../../assets/TargetAgrimensura.webp";

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
          <Description>
            • That website was developed using React, HTML5 and CSS3 to a
            brazilian Land Surveying company.
          </Description>
          <Description>
            • Contact formulary made using Material-UI library and API from
            EmailJS to send information by e-mail to the company.
          </Description>
          <ButtonContainer>
            <Button
              href="https://github.com/lucas-andrade94/Target-Agrimensura-Website"
              target="_blank"
            >
              View Code
            </Button>
            <Button
              href="https://target-agrimensura.herokuapp.com/"
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
