import { useState } from "react";

import NavLinks from "./NavLinks";
import { HeaderContainer } from "./style";
import { CgMenuRound, CgCloseO } from "react-icons/cg";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      className="hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgCloseO
      className="hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <HeaderContainer className="mobile-navigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </HeaderContainer>
  );
};

export default MobileNavigation;
