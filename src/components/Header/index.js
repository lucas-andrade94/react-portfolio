import React from "react";

import {
  HeaderContainer,
  HeaderLink,
  SocialContainer,
  LinkedIn,
  Email,
} from "./style";

import GitHubIcon from "@mui/icons-material/GitHub";

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <HeaderLink>Home</HeaderLink>
        <HeaderLink>About</HeaderLink>
        <HeaderLink>Portfolio</HeaderLink>
        <HeaderLink>Contact</HeaderLink>
      </nav>
      <SocialContainer>
        <a
          href="https://github.com/lucas-andrade94"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon sx={{ color: "white", fontSize: "2.50rem" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-silva-de-andrade/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn sx={{ color: "#2867b2", fontSize: "3rem" }} />
        </a>
        <a
          href="mailto:andradelucas94@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Email sx={{ color: "#D44638", fontSize: "3.25rem" }} />
        </a>
      </SocialContainer>
    </HeaderContainer>
  );
};
