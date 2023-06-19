import React from "react";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import FooterLogo from "./FooterLogo";
import FooterSocialIcons from "./FooterSocialIcons";
import FooterContactInfo from "./FooterContactInfo";

const FooterWrapper = styled("footer")({
  backgroundColor: "#303030",
  color: "#f72585",
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
});

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <FooterLogo />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSocialIcons />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterContactInfo />
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}
