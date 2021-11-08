import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { sizes } from "../../../utils/sizes";

export const DivCarousel = styled.div`
  overflow: hidden;
  width: ${sizes.container};
  margin: 0 0 2rem 0;

  @media (min-width: 0px) and (max-width: 419px) {
    width: 320px;
  }

  @media (min-width: 420px) and (max-width: 767px) {
    width: 420px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
  }

  @media (min-width: 1024px) and (max-width: 1289px) {
    width: 1024px;
  }

  @media (min-width: 1290px) {
    width: 1290px;
  }
`;

export const DivInner = styled.div`
  white-space: nowrap;
  transition: transform 1s;
`;

export const DivItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 700px;
  width: 100%;
  flex-direction: column;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    white-space: pre-line;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 750px;
    width: 100%;
    white-space: pre-line;
  }

  @media (min-width: 1024px) and (max-width: 1289px) {
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
