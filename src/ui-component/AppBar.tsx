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
import Image from "next/Image";
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
        <Box sx={{ flexGrow: 0.5 }}>
          <AppBar color="primary" sx={{ padding: -100 }}>
            <Toolbar className={styles.appbar_positioning}>
              <ResponsiveDrawer />
              <Link href="/Dashboard/Dashboard" className={styles.underline}>
                <Button variant="outlined" className={styles.sign_in_effect}>
                  <Image
                    src="/../public/logo_transparent.png"
                    // objectFit="fill"
                    height={100}
                    width={200}
                    quality={100}
                    layout="intrinsic"
                    priority={true}
                    alt="Logo"
                  />
                </Button>
              </Link>
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
