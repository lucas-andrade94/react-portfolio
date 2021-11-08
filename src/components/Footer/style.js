import styled from "styled-components";
import { sizes } from "../../utils/sizes";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${sizes.container};

  @media (min-width: 0px) and (max-width: 767px) {
    width: 320px;
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
