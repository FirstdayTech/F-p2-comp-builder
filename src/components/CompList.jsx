import React from 'react';
import { Card, CardContent, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import champions from '../db/champions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CompList = ({ comps }) => {
  return (
    <Grid container spacing={4}>
      {comps.map((comp) => (
        <Grid key={comp.id} item xs={12} sm={6} md={6}>
          <Card>
            <CardContent sx={{ padding: '24px'}}>
              <Stack 
                direction='row' 
                justifyContent='space-between' 
                alignItems='center'
              >
                <Link sx={{ textDecoration: 'none', cursor: 'pointer' }} href='/my-comps/0'>
                  <Typography variant="h5" component="div" sx={{ color: 'text.primary'}}>
                    {comp.name}
                  </Typography>
                </Link>
                <Stack 
                  direction='row' 
                  justifyContent='center' 
                  alignItems='center' 
                  spacing={2}
                >
                  <IconButton><EditIcon/></IconButton>
                  <IconButton><DeleteIcon/></IconButton>
                </Stack>
              </Stack>
              <Link sx={{ textDecoration: 'none', cursor: 'pointer' }} href='/my-comps/0'>
                <Stack
                  direction='row'
                  justifyContent='flex-start'
                  alignItems='center'
                  sx={{ marginTop: '10px'}}
                >
                  {comp.champions.map((champ) => (
                    <img
                      key={champions[champ].name}
                      src={champions[champ].images.face}
                      alt={champions[champ].name}
                      style={{
                        width: '50px',
                        marginRight: '10px',
                      }}
                    />
                  ))}
                </Stack>
              </Link>              
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompList;
