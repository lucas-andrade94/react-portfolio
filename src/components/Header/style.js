import styled from "styled-components";
import { colors } from "../../utils/colors";
import { sizes } from "../../utils/sizes";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  flex-direction: row;
  height: 60px;
  width: ${sizes.container};
  align-items: center;
  justify-content: center;
  background-color: ${colors.bg};
  align-items: center;

  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    padding-top: 1rem;
    height: 2rem;
    width: 100%;
  }
`;

export const HeaderLink = styled.a`
  font-size: 1.25rem;
  padding: 0 1rem 0 1rem;
  text-decoration: none;
  color: ${colors.text};
  &:hover {
    font-size: 1.5rem;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 1.125rem;
    padding: 0 0.5rem;
    &:hover {
      font-size: 1.25rem;
    }
  }
`;
