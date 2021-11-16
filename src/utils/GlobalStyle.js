import styled from "styled-components";
import { colors } from "./colors";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  background-color: ${colors.bg};
  items-align: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.title};
  font-weight: bold;
  padding: 2rem 0 0 0;
  margin-top: 1.5rem;

  @media (min-width: 0px) and (max-width: 1023px) {
    padding: 4rem 0 1rem 0;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.title};
  padding: 1rem 0 1rem 0;
`;

export const Description = styled.p`
  display: flex;
  line-height: 1.5;
  padding: 0.25rem;
  align-items: center;
`;
