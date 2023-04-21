import React, { useEffect } from 'react';
import { CompList } from '../components';
import { Typography } from '@mui/material';
import { useGlobalContext } from '../contexts/global';
import axios from 'axios';
import { inlinePromise } from '../utils';

const MyComps = () => {
  const { comps } = useGlobalContext();
  useEffect(() => {
    (async() => {
      const [error, result] = await inlinePromise(axios.get('/comps'));
      if (error) {
        alert('Erro ao carregar as composições');
        console.error(error);
        return;
      }
      comps.set(result.data);
    })();
  }, []);

  return (
    <>
      <Typography variant='h1' sx={{ marginY: '20px'}}>Minhas composições</Typography>
      <CompList comps={comps.get() || []} />
    </>
  );
};

export default MyComps;