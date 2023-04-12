import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const ChampionList = ({ champions }) => {
  console.log(champions);
  return (
    <Grid container spacing={4}>
      {champions.map((champion) => (
        <Grid key={champion.id} item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${champion.image.full}`}
              alt={champion.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {champion.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Role: {champion.tags.join(", ")}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Atributo: {champion.attribute}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ChampionList;
