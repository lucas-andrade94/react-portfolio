import styled from "styled-components";
import { sizes } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
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

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProfileImage = styled.img`
  height: 20%;
  width: 20%;
  border-radius: 50%;

  @media (min-width: 0px) and (max-width: 767px) {
    height: 50%;
    width: 50%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 35%;
    width: 35%;
  }

  @media (min-width: 1024px) and (max-width: 1750px) {
    height: 22%;
    width: 22%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    padding-left: 2rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }
`;

export const Skills = styled.div`
  display: flex:
  flex-direction: column;
`;

export const ButtonCV = styled.a`
  margin: 2rem 2rem;
  padding: 1rem 2rem;
  border: 0.2rem solid;
  color: ${colors.text};
  text-decoration: none;
  text-align: center;
  width: 160px;
  &:hover {
    text-decoration: underline;
    opacity: 0.7;
    transition: ease-in-out 0.3s;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 1rem 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 1rem 0;
  }
`;
