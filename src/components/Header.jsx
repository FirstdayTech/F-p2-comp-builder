import React from 'react';  
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { useGlobalContext } from '../contexts/global';

const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const { sidebar } = useGlobalContext();

  return (
    <AppBar position="static" sx={{ height: '70px', zIndex: 9 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Comp builder
        </Typography>

        {isMobile && (
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => sidebar.open.set(true)}>
            <Menu />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
