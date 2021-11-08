import { HeaderLink } from "./style";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  return (
    <nav>
      <HeaderLink onClick={() => isMobile && closeMobileMenu()} href="#home">
        Home
      </HeaderLink>
      <HeaderLink onClick={() => isMobile && closeMobileMenu()} href="#about">
        About
      </HeaderLink>
      <HeaderLink
        onClick={() => isMobile && closeMobileMenu()}
        href="#projects"
      >
        Projects
      </HeaderLink>
      <HeaderLink onClick={() => isMobile && closeMobileMenu()} href="#contact">
        Contact
      </HeaderLink>
    </nav>
  );
};

export default NavLinks;
