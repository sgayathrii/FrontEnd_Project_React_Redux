import React from "react";

import { IconButton, Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FooterSocialIcons() {
  return (
    <div>
      <Typography variant="subtitle1">Follow us on social media:</Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton color="secondary">
          <FacebookIcon />
        </IconButton>
        <IconButton color="secondary">
          <TwitterIcon />
        </IconButton>
        <IconButton color="secondary">
          <InstagramIcon />
        </IconButton>
      </Box>
    </div>
  );
}
