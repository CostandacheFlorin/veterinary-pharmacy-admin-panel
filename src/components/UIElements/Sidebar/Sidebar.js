import React, { useState, useContext } from "react";
import {
  StyledSidebarWrapper,
  StyledSidebarItem,
  MinimizeSidebarButton,
  MaximizeSidebarButton,
  SidebarWrapper
} from "./Sidebar.styled";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import Text from "../Typography/Text";
import { AuthContext } from "../../../context/auth-context";
import CloseIcon from "@mui/icons-material/Close";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <SidebarWrapper>
      {!showSidebar && <MaximizeSidebarButton style={{transform:"rotate(90deg)"}} onClick={showSidebarHandler}>
        <UnfoldMoreIcon />
      </MaximizeSidebarButton>}
      {showSidebar && (
        <StyledSidebarWrapper>
          <MinimizeSidebarButton onClick={showSidebarHandler}>
            <CloseIcon />
          </MinimizeSidebarButton>
          <Text type="subtitle" color="#fff" margin="2rem 2rem">
            Dashboard
          </Text>
          {SidebarData.map((item, index) => {
            return (
              <StyledSidebarItem to={item.path} key={index}>
                {item.icon}
                <span>{item.title}</span>
              </StyledSidebarItem>
            );
          })}
        </StyledSidebarWrapper>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
