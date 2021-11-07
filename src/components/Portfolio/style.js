import styled from "styled-components";
import { colors } from "../../utils/colors";
import { sizes } from "../../utils/sizes";

export const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${sizes.container};

  @media (min-width: 0px) and (max-width: 419px) {
    width: 320px;
  }

  @media (min-width: 420px) and (max-width: 767px) {
    width: 420px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (min-width: 0px) and (max-width: 419px) {
    flex-direction: column;
    height: 100%;
    width: 320px;
  }

  @media (min-width: 420px) and (max-width: 767px) {
    flex-direction: column;
    height: 100%;
    width: 420px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    height: 100%;
    width: 768px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    flex-direction: column;
    height: 100%;
    width: 1024px;
  }
`;

export const ProjectsContainerMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (min-width: 0px) and (max-width: 419px) {
    flex-direction: column;
    height: 100%;
    width: 320px;
  }

  @media (min-width: 420px) and (max-width: 767px) {
    flex-direction: column;
    height: 100%;
    width: 420px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    height: 100%;
    width: 768px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    flex-direction: column;
    height: 100%;
    width: 1024px;
  }
`;

export const ContentImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-left: 1rem;

  @media (min-width: 0px) and (max-width: 419px) {
    width: 320px;
    justify-content: center;
  }

  @media (min-width: 420px) and (max-width: 767px) {
    width: 420px;
    justify-content: center;
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 768px
    justify-content: center;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
    justify-content: center;
  }
`;

export const ProjectImage = styled.img`
  height: 350px;
  margin-bottom: 1rem;

  @media (min-width: 0px) and (max-width: 479px) {
    height: 170px;
  }

  @media (min-width: 479px) and (max-width: 767px) {
    height: 240px;
  }
`;

export const ProjectImageMobile = styled.img`
  height: 480px;

  @media (min-width: 0px) and (max-width: 767px) {
    height: 350px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1024px) and (max-width: 1750px) {
    justify-content: center;
  }
`;

export const ButtonContainerMobile = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1024px) and (max-width: 1750px) {
    justify-content: center;
  }
`;

export const Button = styled.a`
  margin: 2rem 2rem;
  padding: 1rem 2rem;
  border: 0.2rem solid;
  color: ${colors.text};
  text-decoration: none;
  text-align: center;
  width: 200px;
  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 1rem 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 1rem 0;
  }
`;

export const Link = styled.a`
  color: ${colors.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
