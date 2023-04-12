import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const ChampionList = ({ champions }) => {
  
  return (
    <Grid container spacing={4} sx={{ maxHeight: 'calc(100vh - 240px)', overflowY: 'auto', marginTop: '20px' }}>
      {champions.map((champion, index) => (
        <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={champion.images.splash}
              alt={champion.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {champion.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Tags: {champion.tags.join(', ')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ChampionList;
