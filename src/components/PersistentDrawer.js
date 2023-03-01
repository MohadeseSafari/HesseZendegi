import PropTypes from "prop-types";
import DrawerList from "data/ListData";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  Toolbar,
} from "@mui/material";
import CustomAvatar from "styles/CustomAvatar";
import { NavLink, Outlet } from "react-router-dom";
import MobileNavBar from "./MobileNavbar";

const drawerWidth = 280;

function ResponsiveDrawer() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#F5F5F5",
        height: "100vh",
        padding: "20px",
      }}
      className="main-wrapper"
    >
      {/* Remove all base Styles */}
      <CssBaseline />

      {/*Header */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "black",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Toolbar sx={{ backgroundColor: "#fff" }}>
          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <div className="container">
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            display: "flex",
            justifyContent: "center",
          }}
          className="background-navBar"
        >
          {/*Responsive Mobile Navbar */}
          <MobileNavBar />

          {/*Responsive Desktop Navbar */}
          <Drawer
            anchor="right"
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "92%",
              padding: "8px 10px",
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                zIndex: 0,
                height: "100%!important",
                alignItems: "flex-start",
                border: "unset",
              },
            }}
            open
          >
            <CustomDrawer />
          </Drawer>
        </Box>
        <Outlet />
      </div>
    </Box>
  );
}

const CustomDrawer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "8px 20px",
          width: "100%",
        }}
      >
        <CustomAvatar />
        <Stack>
          <Typography component="h1" variant="h1">
            سعید صفایی
          </Typography>
          <Typography variant="caption"> بدون اشتراک</Typography>
        </Stack>
      </Box>
      <List sx={{ width: "100%" }}>
        {DrawerList.map(({ id, textList, icon, color, link }) => {
          return (
            <ListItem disablePadding key={id}>
              <NavLink to={link}  className="navLink">
                <ListItemIcon sx={{ ml: 1, minWidth: "20px" }}>
                  {icon}
                </ListItemIcon>
                <ListItemText sx={{ display: "flex", color: { color } }}>
                  {textList}
                </ListItemText>
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
