import styled from "styled-components";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const HeaderContainer = styled.header`
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLink = styled.a`
  font-size: 1.25rem;
  padding: 0 1rem 0 1rem;
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
