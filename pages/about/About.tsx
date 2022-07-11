import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  Container,
  Typography,
  Paper,
  CssBaseline,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import styles from "../about/About.module.css";
import Link from "next/link";
import ButtonAppBar from "../../src/ui-component/AppBar";
import Footer from "../../src/ui-component/stickyFooter";
import Image from "next/Image";

const aboutTheme = createTheme({
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

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link href="https://mui.com/">Crypto-Blog</Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function About() {
  return (
    <div>
      <ThemeProvider theme={aboutTheme}>
        <Container component="main" maxWidth="xl">
          <ButtonAppBar />
          <CssBaseline />
          <Container maxWidth="md">
            <Box sx={{maxWidth: 500}}>
            <div className={styles.align_center}>
              <Paper elevation={5} className={styles.margin_bottom}>
                <div className={styles.bg}>
                  <Typography variant="h1" className={styles.title}>
                    <u>About</u>
                  </Typography>
                  <br></br>
                  <br></br>
                  <Typography variant="h6" className={styles.text_color}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis laudantium pariatur temporibus ad numquam quo
                    in et excepturi cum ipsa? Quaerat repellendus ratione atque
                    eos exercitationem culpa aliquam recusandae? Quod!
                  </Typography>
                </div>

                {/* <Box sx={{ height: 200, backgroundColor: `secondary.main` }}> */}
                <Divider />
                  <br></br>
                  <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={4}
                  >
                    <Typography>Data provided by CoinGecko.</Typography>
                    <Image
                      src="/../public/bw_coingecko_logo_without_dark_text-01.png"
                      objectFit="fill"
                      height={100}
                      width={100}
                      quality={100}
                      priority={true}
                      alt="CoinGecko Logo"
                    />
                  </Stack>
                {/* </Box> */}
                <br></br>
                <br></br>
              </Paper>
            </div>
            </Box>
          </Container>
        </Container>
        <br></br>
        <br></br>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default About;
