import React from 'react';
import {
  List,
  useMediaQuery,
  useTheme,
  Box,
  Drawer,
  Button,
  Link
} from '@mui/material';
import globalConfig from '../../config';
import SidebarItem from './SidebarItem';
import { useGlobalContext } from '../../contexts/global';
import { Link as RouterLink } from 'react-router-dom';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { sidebar, user } = useGlobalContext();

  return (
    !isMobile ? (
      <Box sx={{
        minWidth: globalConfig.sidebarWidth,
        width: globalConfig.sidebarWidth,
        height: 'calc(100vh - 70px)',
        bgcolor: 'primary.light'
      }}>
        <SidebarItems isAuthorized={user.get().auth} />
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
        <SidebarItems
          isAuthorized={user.get().auth}
          onClick={() => sidebar.open.set(false)}
        />
      </Drawer>
    )
  );
};

const SidebarItems = ({ onClick, isAuthorized }) => {
  return (
    isAuthorized ? (
      <List sx={{ width: '100%' }}>
        <SidebarItem onClick={onClick} text='Minhas comps' icon={<SportsEsportsIcon />} routePath='/my-comps' />
        <SidebarItem onClick={onClick} text='Criar comp' icon={<AddIcon />} routePath='/create' />    
        <SidebarItem onClick={onClick} text='Campeões' icon={<GroupIcon />} routePath='/champions' />
      </List>
    ) : (
      <List sx={{ width: '100%' }}>
        <Link
          component={RouterLink}
          to='/auth/login'
          sx={{ margin: '24px' }}
        >
          <Button
            variant='contained'
            color='secondary'
            sx={{ width: '80%', marginTop: '16px' }}
          >
            Fazer Login
          </Button>
        </Link>
      </List>
    )
  );
};

export default Sidebar;
