import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import NavBarLogo from "./NavBarLogo";
import NavBarMenu from "./NavBarMenu";

const StyledAppBar = styled(AppBar)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #303030;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  color: #f72585;
`;

const LogoContainer = styled("div")`
  animation: logoAnimation infinite 20s linear;

  @keyframes logoAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function NavBar() {
  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <LogoContainer>
          <NavBarLogo />
        </LogoContainer>
        <NavBarMenu />
      </StyledToolbar>
    </StyledAppBar>
  );
}
