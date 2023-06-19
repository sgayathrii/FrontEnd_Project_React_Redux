import React from "react";
import { Box } from "@mui/material";

import Logo from "../../asserts/images/logo.jpg";

export default function NavBarLogo() {
  return (
    <Box
      component="img"
      src={Logo}
      alt="logo"
      sx={{ height: "50px", width: "50px" }}
    />
  );
}
