import React from 'react';
import { CompList } from '../components';
import { Typography } from '@mui/material';
import { useGlobalContext } from '../contexts/global';

const MyComps = () => {
  const { comps } = useGlobalContext();
  return (
    <>
      <Typography variant='h1' sx={{ marginY: '20px'}}>Minhas composições</Typography>
      <CompList comps={comps.get() || []} />
    </>
  );
};

export default MyComps;