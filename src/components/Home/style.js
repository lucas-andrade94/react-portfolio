import styled from "styled-components";
import { colors } from "../../utils/colors";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 60vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5% 0 5%;

  @media (min-width: 0px) and (max-width: 767px) {
    height: 100vh;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100vh;
  }
`;

export const Intro = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colors.title};
  padding: 0.5rem;
`;
