import React from 'react';
import { CompList } from '../components';
import comps from '../db/comps';
import { Typography } from '@mui/material';

const MyComps = () => {
  return (
    <>
      <Typography variant='h1' sx={{ marginY: '20px'}}>Minhas composições</Typography>
      <CompList comps={comps} />
    </>
  );
};

export default MyComps;