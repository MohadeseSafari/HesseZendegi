import { Box, Tabs, Tab, ListItemIcon, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import DrawerList from "data/ListData";
import { useState } from "react";

const MobileNavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        minWidth: { xs: 390, sm: 480 },
        maxWidth: { xs: 390, sm: 480 },
        display: { xs: "flex", sm: "none" },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        sx={{ display: "flex", flexDirection: "row" }}
        TabIndicatorProps={{ style: { display: "none" } }}
        scrollButtons
      >
        {DrawerList.map(({ id, textList, icon, color, link }) => {
          return (
            <Tab
              key={id}
              sx={{ padding: 0 }}
              label={
                <NavLink to={link} className="navLink-mobile">
                  <ListItemIcon
                    sx={{ ml: 1, Width: "10px", textAlign: "center" }}
                  >
                    {icon}
                  </ListItemIcon>
                  <Typography
                    sx={{ display: "flex", color: { color }, fontSize: "12px" }}
                  >
                    {textList}
                  </Typography>
                </NavLink>
              }
            ></Tab>
          );
        })}
      </Tabs>
    </Box>
  );
};

export default MobileNavBar;
