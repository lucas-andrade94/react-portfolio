import NavLinks from "./NavLinks";
import { HeaderContainer } from "./style";

const Navigation = () => {
  return (
    <HeaderContainer className="navigation">
      <NavLinks isMobile={false} />
    </HeaderContainer>
  );
};

export default Navigation;
