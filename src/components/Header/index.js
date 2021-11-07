import React from "react";

import {
  HeaderContainer,
  HeaderLink,
} from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <HeaderLink href="#home">Home</HeaderLink>
        <HeaderLink href="#about">About</HeaderLink>
        <HeaderLink href="#projects">Projects</HeaderLink>
        <HeaderLink href="#contact">Contact</HeaderLink>
      </nav>
    </HeaderContainer>
  );
};
