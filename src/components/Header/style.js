import styled from "styled-components";
import { colors } from "../../utils/colors";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.bg};
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
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 3rem;
  align-items: center;
`;

export const LinkedIn = styled(LinkedInIcon)`
  margin-left: 2rem;
`;

export const Email = styled(EmailOutlinedIcon)`
  margin-left: 2rem;
`;
