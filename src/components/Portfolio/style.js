import styled from "styled-components";
import { colors } from "../../utils/colors";

export const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5% 0 5%;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ContentImg = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-right: 5%;
`;

export const ProjectImage = styled.img`
  height: 350px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const Link = styled.a`
  color: ${colors.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
