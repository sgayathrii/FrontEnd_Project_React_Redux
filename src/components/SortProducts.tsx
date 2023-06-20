import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { SortProductsProps } from "../types/types";

export default function SortProducts({
  sortOption,
  handleSortOptionChange,
}: SortProductsProps) {
  return (
    <div>
      <FormControl variant="outlined" sx={{ minWidth: 150, marginBottom: 5 }}>
        <InputLabel id="sort-label">Sort by</InputLabel>
        <Select
          labelId="sort-label"
          id="sort-select"
          value={sortOption}
          onChange={handleSortOptionChange}
          label="Sort by"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              height: "42px",
              borderColor: "#f72585",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              height: "42px",
              borderColor: "#acddf4",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              height: "42px",
              borderColor: "#f7e5e5",
            },
          }}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="A-Z">A-Z</MenuItem>
          <MenuItem value="Price">Price</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
