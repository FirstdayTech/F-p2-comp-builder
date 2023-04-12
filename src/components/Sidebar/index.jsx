import React from 'react';
import {
  List,
  useMediaQuery,
  useTheme,
  Box,
  Drawer
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import globalConfig from '../../config';
import SidebarItem from './SidebarItem';
import { useGlobalContext } from '../../contexts/global';

const Sidebar = ({ baseRef }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { sidebar } = useGlobalContext();

  
  // {isMobile ? (
  //   <IconButton
  //     color="inherit"
  //     aria-label="open drawer"
  //     edge="start"
  //     onClick={handleDrawerToggle}
  //   >
  //     <MenuIcon />
  //   </IconButton>
  // ) : null}
  return (
    
    !isMobile ? (
      <Box sx={{
        minWidth: globalConfig.sidebarWidth,
        width: globalConfig.sidebarWidth,
        height: '100vh',
        bgcolor: 'primary.light'
      }}>
        <SidebarItems />
      </Box>
    ) : (
      <Drawer anchorEl={baseRef?.current?.target} anchor='left' open={sidebar.open.get()} onClose={() => sidebar.open.set(false)}>
        <SidebarItems onClick={() => sidebar.open.set(false)} />
      </Drawer>
    )
  );
};

const SidebarItems = ({ onClick }) => {
  return (
    <List sx={{ width: '100%' }}>
      <SidebarItem onClick={onClick} text='Minhas comps' icon={<SportsEsportsIcon />} routePath='/my-comps' />
      <SidebarItem onClick={onClick} text='Campeões' icon={<GroupIcon />} routePath='/champions' />      
    </List>
  );
};

export default Sidebar;
