import React from "react";
import { useState } from "react";
import { IconButton, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/system";
import { SearchFormProps } from "../types/types";

const SearchField = styled(TextField)`
  width: 200px;

  & .MuiOutlinedInput-root {
    fieldset {
      border-color: #f72585;
    }

    &:hover fieldset {
      border-color: #acddf4;
    }

    &.Mui-focused fieldset {
      border-color: #f7e5e5;
    }
  }
`;

export default function SearchForm({ onSearch, onReset }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm("");
    onReset();
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <SearchField
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleReset} edge="end">
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
