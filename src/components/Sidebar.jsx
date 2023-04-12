import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const Sidebar = ({ onSelect }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleChampionSelect = () => {
    onSelect("champions");
    if (isMobile) {
      setOpen(false);
    }
  };

  const handleCompSelect = () => {
    onSelect("comps");
    if (isMobile) {
      setOpen(false);
    }
  };

  return (
    <>
      {isMobile ? (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      ) : null}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isMobile ? open : true} // Adicione esta linha
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
          },
        }}
      >
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
    </>
  );
};

export default Sidebar;
