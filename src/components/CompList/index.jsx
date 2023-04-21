import React from 'react';
import { useGlobalContext } from '../../contexts/global';
import CompCard from './CompCard';
import { Grid, Typography } from '@mui/material';
import { inlinePromise } from '../../utils';
import axios from 'axios';

const CompList = ({ comps }) => {
  const { comps: compsState } = useGlobalContext();

  const handleDelete = async (i) => {
    const decision = window.confirm(
      'Tem certeza que deseja excluir essa composição?'
    );
    if (decision) {
      const target = compsState.get()[i];
      const [error] = await inlinePromise(axios.delete(`/comp/${target.id}`));
      if (error) {
        alert('Erro ao excluir a composição');
        console.error({error});
        return;
      }
      compsState.set(compsState.get().filter((_, j) => j !== i));
    }
  };

  return (
    comps.length > 0 ? (
      <Grid container spacing={4}>
        {comps.map((comp, i) => (
          <Grid key={comp.name}
            item
            xs={12}
            sm={12}
            md={6}
            maxWidth={{
              sm: '380px',
              md: '380px'
            }}>
            <CompCard
              comp={comp}
              onDelete={() => handleDelete(i)}
            />
          </Grid>
        ))}
      </Grid>
    ) : (
      <Typography>Você não tem nenhuma composição salva</Typography>
    )
  );
};

export default CompList;
