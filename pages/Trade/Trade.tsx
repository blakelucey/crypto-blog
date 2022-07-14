import * as React from "react";
import {
  styled,
  createTheme,
  ThemeProvider,
  Button,
  CssBaseline,
  Typography,
  Container,
  Link,
} from "@mui/material";
import ButtonAppBar from "../../src/ui-component/AppBar";
import VariableWidthGrid from "../../src/ui-component/Grid";
import styles from "./Trade.module.css";
import Footer from "../../src/ui-component/stickyFooter";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const theme = createTheme({
  palette: {
    // type: 'light',
    primary: {
      main: "#546e7a",
    },
    secondary: {
      main: "#cfd8dc",
    },
  },
  typography: {
    fontFamily: "Droid Serif",
    fontWeightBold: 800,
    body2: {
      fontSize: "1.6rem",
    },
    body1: {
      fontSize: "1.7rem",
    },
  },
});

export default function TradeOpps() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <CssBaseline />
        <ButtonAppBar />
        <div className={styles.grid} id="top">
          <VariableWidthGrid />
        </div>
        <Button className={styles.upArrow} variant="contained">
          <a href="#top">
            {" "}
            <ArrowUpwardIcon fontSize="large" />
          </a>
        </Button>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
