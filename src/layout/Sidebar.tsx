import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const Sidebar = () => {
  return (
    <>
      <Drawer variant="permanent" anchor="left" 
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  }}>
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/dashboard">Dashboard </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/employees">Employees </Link>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Sidebar;
