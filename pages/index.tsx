import * as React from "react";
import type { NextPage } from "next";
import {
  Container,
  Typography,
  Link,
  Paper,
  Grid,
  Box,
  Stack,
  TextField,
  Button,
} from "@mui/material";
// import Link from 'next/Link';
import Image from "next/Image";
import styles from "./index.module.css";
import ButtonAppBar from "../src/ui-component/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../src/ui-component/stickyFooter";
import About from "../src/utils/mainCards";
import WalletMain from "../src/utils/walletMain";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InfoMain from "../src/utils/infoMain";
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

const Home: NextPage = () => {

  //

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Box sx={{ height: 2500 }}>
        <div id="top">
          <Container maxWidth="md">
            <Box sx={{ height: 725 }}>
              <Stack direction="row">
                <div className={styles.logo_position}>
                  <Image
                    src="/../public/logo.png"
                    objectFit="fill"
                    height={500}
                    width={500}
                    quality={100}
                    priority={true}
                    alt="Logo"
                  />
                </div>
                <div className={styles.title_position}>
                  <Typography
                    variant="h2"
                    className={styles.underline}
                    color="#546e7a"
                  >
                    Arbitrage trading opportunities...
                  </Typography>
                </div>
                <br></br>
                <div className={styles.descript_position}>
                  <Typography
                    variant="h4"
                    className={styles.underline}
                    color="#546e7a"
                  >
                    For over x digital currencies,
                  </Typography>
                  <Typography variant="h4" className={styles.underline}>
                    across y exchanges.
                  </Typography>
                </div>
              </Stack>
              <div className={styles.input_position}>
                <Stack direction="row">
                  <TextField
                    placeholder="your.email@here.com"
                    variant="filled"
                    sx={{ margin: 2 }}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ height: 90, width: 200 }}
                  >
                    <Typography variant="h6">Sign Up</Typography>
                  </Button>
                </Stack>
              </div>
            </Box>
          </Container>
        </div>
        <Button variant="contained" className={styles.downArrow}>
          <a href="#about">
            <ArrowDownwardIcon fontSize="large" />
          </a>
        </Button>
        <div id="about">
          <br></br>
        </div>
        <br></br>
        <Box sx={{ height: 600, backgroundColor: `secondary.main` }}>
          <br></br>
          <br></br>
          <About />
        </Box>
        <Box sx={{ padding: 5, maxWidth: 1500 }}>
          {" "}
          <InfoMain />
        </Box>
        <Box
          sx={{ backgroundColor: "secondary.main", padding: 5, maxWidth: 1500 }}
        >
          <WalletMain />
        </Box>
        <br></br>
        <br></br>
        <Button className={styles.upArrow} variant="contained">
          <a href="#top">
            {" "}
            <ArrowUpwardIcon fontSize="large" />
          </a>
        </Button>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};
export default Home;
