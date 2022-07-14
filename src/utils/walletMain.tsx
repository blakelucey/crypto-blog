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
  FormGroup,
} from "@mui/material";
// import Link from 'next/Link';
import Image from "next/Image";
import styles from "./walletMain.module.css";
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

export default function WalletMain() {
  const [wallet, setWallet] = useState("");
  const [token, setToken] = useState("");
  const [bankAccount, setBankAccount] = useState("");

  const handleWallet = (event: SelectChangeEvent) => {
    setWallet(event.target.value as string);
  };

  const handleToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const handleAccount = (event: SelectChangeEvent) => {
    setBankAccount(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h3" color="primary.main">
          Add your digital wallet, and PayPal, Stripe, or Checking Account.
        </Typography>
        <br></br>
        <FormGroup>
          <FormControl fullWidth sx={{ margin: 1 }}>
            <InputLabel id="demo-simple-select-label">Wallet</InputLabel>
            <Select
              id="demo-simple-select-label"
              value={wallet}
              label="Wallet"
              onChange={handleWallet}
            >
              <MenuItem value={"CoinBase"}>CoinBase</MenuItem>
              <MenuItem value={"MetaMask"}>MetaMask</MenuItem>
              <MenuItem value={"Ledger"}>Ledger</MenuItem>
            </Select>
            <br></br>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => console.log("Select Wallet")}
            >
              <Typography variant="h6"> Select your wallet</Typography>
            </Button>
          </FormControl>
          <br></br>
          <br></br>
          <FormControl fullWidth sx={{ margin: 1 }}>
            <TextField
              label="Wallet Token"
              value={token}
              onChange={handleToken}
            />
            <br></br>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => console.log("Submit Token")}
            >
              <Typography variant="h6">Submit Token</Typography>
            </Button>
          </FormControl>
          <br></br>
          <br></br>
          <FormControl fullWidth sx={{ margin: 1 }}>
            <InputLabel id="account-label-one">Bank Account</InputLabel>
            <Select
              value={bankAccount}
              label="Bank Account"
              onChange={handleAccount}
              id="account-label-one"
            >
              <MenuItem value={"PayPal"}>PayPal</MenuItem>
              <MenuItem value={"Stripe"}>Stripe</MenuItem>
              <MenuItem value={"Bank Account"}>Bank Account</MenuItem>
            </Select>
            <br></br>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => console.log("Connect Account")}
            >
              <Typography variant="h6">
                Select and Connect Your Account
              </Typography>
            </Button>
          </FormControl>
        </FormGroup>
      </Box>
    </ThemeProvider>
  );
}
