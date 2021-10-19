import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  padding: 0 5% 0 5%;
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
