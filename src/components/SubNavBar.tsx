import React from "react";
import { Grid, Button } from "@mui/material";

import { Category, SubNavBarProps } from "../types/types";

export default function SubNavBar({
  categories,
  selectedCategory,
  onSelect,
}: SubNavBarProps) {
  return (
    <Grid container justifyContent="center" spacing={2}>
      {categories.map((category: Category) => (
        <Grid item key={category}>
          <Button
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => onSelect(category)}
            sx={{
              color: "#f72585",
              backgroundColor:
                selectedCategory === category ? "#acddf4" : "inherit",
              "&:hover": {
                backgroundColor: "#FFAFCC",
              },
            }}
          >
            {category}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
