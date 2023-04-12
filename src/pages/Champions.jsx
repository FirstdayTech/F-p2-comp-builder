import React, { useState } from 'react';
import { ChampionList, SearchBar } from '../components';
import { Typography } from '@mui/material';
import champions from '../db/champions';

const Champtions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Typography variant='h1' sx={{ marginY: '10px'}}>Campeões</Typography>
      <SearchBar onSearch={setSearchTerm} />
      <ChampionList champions={champions.filter(c => c.name.toLowerCase().trim().includes(searchTerm.trim().toLowerCase()))} />
    </>
  );
};

export default Champtions;