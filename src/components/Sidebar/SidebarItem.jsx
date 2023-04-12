import { Link, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const SidebarItem = ({ text, routePath, icon, onClick }) => {
  return (
    <Link onClick={onClick} component={RouterLink} to={routePath} sx={{textDecoration: 'none'}}>
      <ListItem>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText disableTypography>
          <Typography sx={{ color: '#333'}}>{text}</Typography>
        </ListItemText>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;