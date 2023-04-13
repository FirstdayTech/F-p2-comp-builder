import React from 'react';
import { Box, Container, Grid, Hidden } from '@mui/material';
import { Outlet } from 'react-router-dom';


const AuthLayout = () => {
  return (
    <Box>
      <Grid container>
        <Hidden smDown>
          <Grid
            item
            md={4}
            sx={{
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background:
                'url(\'/images/auth-banner.jpg\') no-repeat center center',
              backgroundSize: 'cover',
            }}
          ></Grid>
        </Hidden>
        <Grid item xs={12} md={8}>
          <Box minHeight="100vh">
            <Container maxWidth="md">
              <Outlet />
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthLayout;