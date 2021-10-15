import styled from "styled-components";
import { colors } from "../../utils/colors";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90%;
`;

export const ProfileImage = styled.img`
  height: 20%;
  width: 20%;
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.title};
  padding: 1rem;
`;

export const Description = styled.p`
  display: flex;
  text-align: justify;
  line-height: 1.5;
  padding: 0.25rem;
  align-items: center;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
`;

export const Skills = styled.div`
  display: flex:
  flex-direction: column;
`;
