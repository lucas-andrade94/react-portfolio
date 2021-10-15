import styled from "styled-components";
import { colors } from "../../utils/colors";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 60vh;
  align-items: center;
  justify-content: center;
  text-align: center;
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
