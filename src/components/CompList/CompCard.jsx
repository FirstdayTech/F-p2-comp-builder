import React from 'react';
import { Card, CardContent, IconButton, Link, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import champions from '../../db/champions';
import { Link as RouterLink } from 'react-router-dom';

const CompCard = ({ comp, onEdit, onDelete }) => {
  return (
    <Card>
      <CardContent sx={{ padding: '24px'}}>
        <Stack
          direction='row' 
          justifyContent='space-between' 
          alignItems='center'
        >
          <Link
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
            to={`/view/${comp.name}`}
            component={RouterLink}
          >
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
            <RouterLink to={`/edit/${encodeURIComponent(comp.name)}`}><IconButton onClick={onEdit}><EditIcon/></IconButton></RouterLink>
            <IconButton onClick={onDelete}><DeleteIcon/></IconButton>
          </Stack>
        </Stack>
        <Link
          sx={{ textDecoration: 'none', cursor: 'pointer' }}
          to={`/view/${comp.name}`}
          component={RouterLink}
        >
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            sx={{ marginTop: '10px'}}
          >
            {comp.champions.map((index) => (
              <img
                key={champions[index].name}
                src={champions[index].images.face}
                alt={champions[index].name}
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
  );
};

export default CompCard;