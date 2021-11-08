import styled from "styled-components";
import { colors } from "../../utils/colors";
import { sizes } from "../../utils/sizes";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${sizes.container};

  @media (min-width: 0px) and (max-width: 767px) {
    width: 320px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  padding: 2rem 0 4rem 0;

  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
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
