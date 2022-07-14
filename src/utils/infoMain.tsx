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
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
// import Link from 'next/Link';
import Image from "next/Image";
import styles from "./infoMain.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

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

export default function InfoMain() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={4}
        >
          <Box sx={{ maxWidth: 700 }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
              porta nibh venenatis cras sed felis. Urna nec tincidunt praesent
              semper feugiat nibh. Placeholder text, placeholder image.
            </Typography>
          </Box>
          <div>
            <Image
              src="/../public/logo.png"
              objectFit="fill"
              height={500}
              width={500}
              quality={100}
              layout="intrinsic"
              priority={true}
              alt="Logo"
            />
          </div>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
