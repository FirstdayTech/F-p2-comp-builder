import React from 'react';
import { Box, TextField } from '@mui/material';


const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Box sx={{ marginY: '20px' }}>
      <TextField
        label="Pesquisar campeão"
        variant="outlined"
        onChange={handleChange}
        fullWidth
        InputProps={{

        }}
      />
    </Box>
  );
};

export default SearchBar;
