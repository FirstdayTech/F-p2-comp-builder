import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const CompList = ({ comps }) => {
  return (
    <Grid container spacing={4}>
      {comps.map((comp) => (
        <Grid key={comp.id} item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {comp.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Campeões: {comp.champions.join(", ")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompList;
