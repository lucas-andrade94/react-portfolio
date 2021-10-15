import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5% 0 5%;
`;

export const Container = styled.div`
  display: flex;
  flex: row;
  justify-content: space-around;
  width: 60%;
  padding: 2rem 0 4rem 0;
`;

export const Link = styled.a`
  display: flex;
  color: ${colors.title};
  text-decoration: none;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;
