import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

import {
  StyledNav,
  StyledLogoArea,
  StyledActionsArea,
} from "./MainNavigation.styled";
import LogoutButton from "../LogoutButton/LogoutButton";
import Text from "../UIElements/Typography/Text";

const MainNavigation = (props) => {
  const auth = useContext(AuthContext);

  return (
    <StyledNav>
      <StyledLogoArea>
        <Logo />
      </StyledLogoArea>

      <StyledActionsArea>
        {auth.isLoggedIn && <LogoutButton />}
        {!auth.isLoggedIn && (
          <Link to="/autentificare">
            {" "}
            <Text type="text" size="medium" bold="true">
              Autentificare
            </Text>{" "}
          </Link>
        )}
      </StyledActionsArea>
    </StyledNav>
  );
};

export default MainNavigation;
