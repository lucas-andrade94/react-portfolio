import styled from "styled-components";
import { colors } from "./colors";

export const Container = styled.body`
  background-color: ${colors.bg};
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.title};
  font-weight: bold;
  padding: 2rem;
`;
