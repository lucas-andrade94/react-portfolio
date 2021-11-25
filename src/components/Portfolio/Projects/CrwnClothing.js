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
import CrownClothingImage from "../../../assets/CrwnClothing.gif";

export const CrwnClothing = () => {
  return (
    <>
      <Subtitle>CRWN Clothing</Subtitle>
      <ProjectsContainer>
        <ContentImg>
          <ProjectImage src={CrownClothingImage} alt="CRWN Clothing Screen" />
        </ContentImg>
        <ContentText>
          <DescriptionProject>
            &#x27A4;&nbsp; Clothing e-commerce website.
          </DescriptionProject>
          <DescriptionProject>
            &#x27A4;&nbsp; Stacks used: React, Redux, Styled-components,
            Firebase and Stripe.
          </DescriptionProject>
          <ButtonContainer>
            <Button
              href="https://github.com/lucas-andrade94/react-ecommerce"
              target="_blank"
            >
              View Code
            </Button>
            <Button
              href="https://react-ecommerce-seven.vercel.app/"
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
