import React, { useContext } from "react";
import {StyledLogoutButton} from "./LogoutButton.styled";
import { AuthContext } from "../../context/auth-context";
import Text from "../UIElements/Typography/Text";

const LogoutButton = () => {
  const auth = useContext(AuthContext);

  return (
    <StyledLogoutButton onClick={auth.logout}>
    <Text type="text" bold="true">Logout</Text>
  </StyledLogoutButton>
  );
};

export default LogoutButton;
