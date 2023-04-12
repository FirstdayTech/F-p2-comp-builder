import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Sidebar = ({ onSelect }) => {
  const handleChampionSelect = () => {
    onSelect('champions');
  };

  const handleCompSelect = () => {
    onSelect('comps');
  };

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button onClick={handleChampionSelect}>
          <ListItemIcon>
            <SportsEsportsIcon />
          </ListItemIcon>
          <ListItemText primary="Listagem Campeão" />
        </ListItem>
        <ListItem button onClick={handleCompSelect}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Listagem Composições" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
