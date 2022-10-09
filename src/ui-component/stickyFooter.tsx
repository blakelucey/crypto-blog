import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  CssBaseline,
  Container,
  Link,
} from "@mui/material";
import styles from "./stickyFooter.module.css";
import Image from "next/Image";

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" className={styles.center}>
      {"Copyright © "}
      <Link color="inherit" href="https://www.blakelucey.dev">
        www.blakelucey.dev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#546e7a" : "#546e7a",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" color="#fff" className={styles.center}>
            Crypto-Blog
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={0}
          >
            <Typography color="#fff">Data provided by CoinGecko.</Typography>
            <Image
              src="/../public/bw_coingecko_logo_without_dark_text-01.png"
              objectFit="fill"
              height={50}
              width={50}
              quality={100}
              layout="intrinsic"
              priority={true}
              alt="CoinGecko Logo"
            />
          </Stack>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
