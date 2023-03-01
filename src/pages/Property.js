import { Box } from "@mui/material";
const drawerWidth = 280;
const Property = () => {
  return (
    <Box
      component="main"
      className="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        backgroundColor: "#fff",
        borderRadius: "16px 0px 0px 16px",
        padding: "8px 10px",
      }}
    ></Box>
  );
};

export default Property;
