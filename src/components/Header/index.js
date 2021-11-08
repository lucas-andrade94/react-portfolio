import React from "react";

import "./navBar.css";
import { HeaderContainer } from "./style";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export const Header = () => {
  return (
    <HeaderContainer className="nav-bar">
      <Navigation />
      <MobileNavigation />
    </HeaderContainer>
  );
};
