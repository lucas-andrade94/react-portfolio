import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const DivCarousel = styled.div`
  overflow: hidden;
  width: 95%;
  margin: 2rem 0;
`;

export const DivInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const DivItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 90%;
  flex-direction: column;

  @media (min-width: 0px) and (max-width: 767px) {
    height: 600px;
    width: 100%;
    white-space: pre-line;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 750px;
    width: 100%;
    white-space: pre-line;
  }

  @media (min-width: 1024px) and (max-width: 1750px) {
    height: 750px;
    width: 100%;
    white-space: pre-line;
  }
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
`;

export const NormalButton = styled.a`
  &.active {
    color: ${colors.title};
  }

  margin: 2rem 0.5rem 0 0.5rem;
  padding: 0.5rem 0.5rem;
  border: 0.2rem solid;
  color: ${colors.text};
  text-decoration: none;
  text-align: center;
  width: 2%;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 1rem 0.5rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 1rem 0.5rem;
  }
`;
