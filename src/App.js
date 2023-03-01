import CssBaseline from "@mui/material/CssBaseline";
import MainRoutes from "routes";
import { ThemeProvider } from "@mui/system";
import { theme } from "styles/theme";
import "styles/style.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
