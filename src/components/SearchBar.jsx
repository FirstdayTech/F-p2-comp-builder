import React from "react";
import { TextField } from "@mui/material";


const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Pesquisar campeão"
        variant="outlined"
        onChange={handleChange}
        InputProps={{

        }}
      />
    </div>
  );
};

export default SearchBar;
