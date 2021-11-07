import styled from "styled-components";
import { colors } from "../../utils/colors";
import { sizes } from "../../utils/sizes";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${sizes.container};

  @media (min-width: 0px) and (max-width: 767px) {
    width: 320px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
  }
`;

export const Intro = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1rem 0;

  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colors.title};
  padding: 0.5rem;

  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 1.75rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GitHub = styled(GitHubIcon)`
  margin-top: 2rem;
  margin-right: 2rem;
`;

export const LinkedIn = styled(LinkedInIcon)`
  margin-top: 2rem;
  margin-right: 2rem;
`;

export const Email = styled(EmailOutlinedIcon)`
  margin-top: 2rem;
`;
