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
  Autocomplete,
} from "@mui/material";
// import Link from 'next/Link';
import Image from "next/Image";
import styles from "./coinSelect.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [rows, setRows]: any = useState([]);
  const fixedOptions: any = [];
  const [coinSelect, setCoin]: any = useState([...fixedOptions]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData: any = async () => {
    const response: any = await axios.get("/api/coinList");
    setRows(response.data.data);
    console.log("isArray: ", Array.isArray(response.data.data));
  };
  console.log("rows: ", rows);

  const handleSelect = () => {
    console.log("selected: ", coinSelect);
    axios.post
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: 2 }}>
        <Typography variant="h4">
          Select the coin(s) you wish to trade:
        </Typography>
        <br></br>
        <FormControl fullWidth sx={{ margin: 1 }}>
          <Autocomplete
            multiple
            id="fixed-tags-demo"
            options={rows}
            value={rows.id}
            style={{ width: 500 }}
            getOptionLabel={(option: any) => option.id}
            onChange={(event: any, newValue: any) => setCoin(newValue)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Bitcoin" />
            )}
          />
          <br></br>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => console.log('selected: ', coinSelect)}
          >
            <Typography variant="h6"> Select your Coin(s)</Typography>
          </Button>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
