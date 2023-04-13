import React from 'react';
import { useGlobalContext } from '../../contexts/global';
import CompCard from './CompCard';
import { Grid } from '@mui/material';

const CompList = ({ comps }) => {
  const { comps: compsState } = useGlobalContext();

  const handleDelete = (i) => {
    const decision = window.confirm(
      'Tem certeza que deseja excluir essa composição?'
    );
    if (decision) {
      compsState.set(compsState.get().filter((_, j) => j !== i));
    }
  };

  return (
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
  );
};

export default CompList;
