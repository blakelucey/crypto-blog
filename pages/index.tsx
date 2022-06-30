import * as React from "react";
import type { NextPage } from "next";
import { Container, Typography, Link, Stack } from "@mui/material";
// import Link from 'next/Link';
import Image from "next/Image";
import styles from "../styles/bg.module.css";
import ButtonAppBar from "../src/ui-component/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../src/ui-component/stickyFooter";

const theme = createTheme({
  palette: {
    // type: 'light',
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#607d8b',
    },
  },
  typography: {
    fontFamily: 'Droid Serif',
    fontWeightBold: 800,
    body2: {
      fontSize: '1.6rem',
    },
    body1: {
      fontSize: '1.7rem',
    },
  },
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" disableGutters={true}>
        <div>
          <div className={styles.bg}>
            <Image
              src="/../public/doge_bg.jpeg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className={styles.bgText}>
            <ButtonAppBar />
            {/* <Stack direction="row" spacing={2}>
          <Link href="/login/SignIn" underline="hover">
            Sign In
          </Link>
          <p className={styles.slash}>/</p>
          <Link href="/login/SignUp" underline="hover">
            Sign Up
          </Link>
          </Stack> */}
          </div>
        </div>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
export default Home;
