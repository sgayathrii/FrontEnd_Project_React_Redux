import React from "react";
import { Typography, Box, Icon } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function FooterContactInfo() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="subtitle1">Contact Information</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Icon component={LocationOnIcon} />
        <Typography>123, Stockholm, Sweden</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Icon component={PhoneIcon} />
        <Typography>+46 123-456-789</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Icon component={EmailIcon} />
        <Typography>contact@example.com</Typography>
      </Box>
    </div>
  );
}
