import styled from "styled-components";
import { colors } from "../../utils/colors";

export const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5% 0 5%;

  @media (min-width: 0px) and (max-width: 767px) {
    padding: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0;
  }

  @media (min-width: 1024px) and (max-width: 1750px) {
    padding: 0 2% 0 2%;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    height: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1750px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ContentImg = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-right: 5%;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    padding-right: 0;
    justify-content: center;
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
    padding-right: 0;
    justify-content: center;
  }

  @media (min-width: 1024px) and (max-width: 1750px) {
    width: 90%;
    padding-right: 0;
    justify-content: center;
  }
`;

export const ProjectImage = styled.img`
  height: 350px;

  @media (min-width: 0px) and (max-width: 767px) {
    height: 200px;
  }
`;

export const ButtonContainer = styled.div`
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
  width: 18%;
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
