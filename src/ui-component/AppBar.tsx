import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ResponsiveDrawer from "./Drawer";
import styles from "../../styles/bg.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@material-ui/core";
import {
  Link,
  Stack,
  Button,
  Typography,
  Toolbar,
  IconButton,
  Box,
  AppBar,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

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

const sign_in = (
  <Stack direction="row" spacing={2}>
    <Link href="/login/SignIn">
      <Button variant="text" className={styles.sign_in_effect}>
      <Typography color="#fff" variant="h6">
        Sign In
      </Typography>
      </Button>
    </Link>
    {/* <Typography variant="h6">/</Typography> */}
    <Link href="/login/SignUp">
      <Button variant="contained" color="secondary">
        <Typography color="#546e7a" variant="h6">
          Sign Up
        </Typography>
      </Button>
    </Link>
  </Stack>
);

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar color="primary">
            <Toolbar>
              {/* <ResponsiveDrawer /> */}
              <Typography className={styles.sign_in_position}>
              {sign_in}
              </Typography>
              <Link href="/" className={styles.underline}>
                <Typography sx={{ marginLeft: 4 }} color="#fff">
                  Home
                </Typography>
              </Link>
              <Link
                href="/Dashboard/Dashboard"
                className={styles.underline}
              >
                <Typography color="#fff" sx={{ marginLeft: 4 }}>
                  Dashboard
                </Typography>
              </Link>
              <Link
                href="/Arbitrage/Arbitrage"
                className={styles.underline}
              >
                <Typography color="#fff" sx={{ marginLeft: 4 }}>
                  Arbitrage Opportunities
                </Typography>
              </Link>
              <Link
                href="/about/About"
                className={styles.underline}
              >
                <Typography color="#fff" sx={{ marginLeft: 4 }}>
                  About
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
