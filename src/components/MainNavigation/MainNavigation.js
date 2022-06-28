import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import Logo from "../logo/Logo";

import {
  StyledNav,
  StyledLogoArea,
  StyledActionsArea,
} from "./MainNavigation.styled";
import LogoutButton from "../LogoutButton/LogoutButton";

const MainNavigation = (props) => {
  const auth = useContext(AuthContext);

  return (
    <StyledNav>
      <StyledLogoArea>
        

        <Logo />
      </StyledLogoArea>

      <StyledActionsArea>
        {auth.isLoggedIn && <LogoutButton />}
      </StyledActionsArea>
    </StyledNav>
  );
};

export default MainNavigation;
