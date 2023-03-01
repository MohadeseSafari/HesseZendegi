import Error from "assets/image/404Error.gif";
import { Container } from "@mui/material";
import "styles/style.css";

function NoMatched() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <img src={Error} alt="404 error" className="error404" />
    </Container>
  );
}

export default NoMatched;
