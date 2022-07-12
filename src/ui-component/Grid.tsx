import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../../styles/bg.module.css";
import { useState } from "react";
import DataTable from "./Table";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export default function VariableWidthGrid() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xl="auto">
            <Paper elevation={5}>
              <Item>
                <DataTable />
              </Item>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
