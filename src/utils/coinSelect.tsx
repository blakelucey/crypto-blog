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
import styles from "./coinSelect.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { TableRowsOutlined } from "@mui/icons-material";

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

export default function CoinSelect() {
  const [coinSelect, setCoin]: any = useState([]);
  const [rows, setRows]: any[] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData: any = async () => {
    const response: any = await axios.get("/api/coinList");
    setRows(response.data.data);
    console.log('isArray: ', Array.isArray(response.data.data));
  };
  console.log('rows: ', rows);

  const handleSelect = (event: SelectChangeEvent) => {
    setCoin(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: 2 }}>
        <Typography variant="h4">
          Select the coin(s) you wish to trade:
        </Typography>
        <br></br>
        <FormControl fullWidth sx={{ margin: 1 }}>
          <InputLabel id="demo-simple-select-label">Select Coin</InputLabel>
          <Select
            id="demo-simple-select-label"
            value={coinSelect}
            label="coin"
            onChange={handleSelect}
            multiple={true}
          >
            {rows?.map((row: any) => {
              return (
                <MenuItem value={row.id}>
                  Name: {row.name}, Symbol: {row.symbol}
                </MenuItem>
              );
            })}
          </Select>
          <br></br>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => console.log("Select Coin")}
          >
            <Typography variant="h6"> Select your Coin</Typography>
          </Button>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
