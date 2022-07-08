import * as React from "react";
import {
  styled,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  Card,
  Paper,
  Typography,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import ButtonAppBar from "../../src/ui-component/AppBar";
import Footer from "../../src/ui-component/stickyFooter";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Arbitrage.module.css";

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

export default function ArbitrageContent() {
  const [rows, setRows]: any = useState([]);

  // useEffect(() => {
  //   fetchData();
  // });

  // const fetchData: any = async () => {
  //   const response: any = await axios.get(`/api/coinList`);
  //   console.log("response.data: ", response.data);
  //   let dataRows: any[] = response.data.data;
  //   setRows(dataRows);
  //   console.log("rows: ", rows);
  // };
  // console.log("rows: ", rows);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <CssBaseline />
        <ButtonAppBar />
        <Box className={styles.position}>
          <Paper elevation={4} sx={{ padding: 2 }}>
            <Typography variant="h1">Data Here:</Typography>
            <TextField
              select
              multiline
              label="Select"
              value={rows}
              fullWidth
              variant="filled"
            >
              {rows.map((row: any) => (
                <MenuItem key={row} value={row.value}>
                  {row.label}
                </MenuItem>
              ))}
            </TextField>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
