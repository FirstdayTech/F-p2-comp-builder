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

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { sidebar } = useGlobalContext();

  return (
    !isMobile ? (
      <Box sx={{
        minWidth: globalConfig.sidebarWidth,
        width: globalConfig.sidebarWidth,
        height: 'calc(100vh - 70px)',
        bgcolor: 'primary.light'
      }}>
        <SidebarItems />
      </Box>
    ) : (
      <Drawer
        anchor='left'
        open={sidebar.open.get()}
        onClose={() => sidebar.open.set(false)}
        PaperProps={{
          sx: {
            minWidth: globalConfig.sidebarWidth,
          }
        }}
      >
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
