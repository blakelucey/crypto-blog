import * as React from "react";
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
  Box,
  AppBar,
} from "@mui/material";

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
        <Box sx={{ flexGrow: 0.5 }}>
          <AppBar color="primary" sx={{ padding: -100 }}>
            <Toolbar className={styles.appbar_positioning}>
              <ResponsiveDrawer />
              <Typography className={styles.sign_in_position}>
                {sign_in}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
