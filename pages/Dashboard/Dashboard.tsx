import * as React from "react";
import {
  styled,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
  Divider,
  Link,
  Box,
  Toolbar,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import Chart from "../../src/ui-component/dashComp/Chart";
import Deposits from "../../src/ui-component/dashComp/Deposits";
import Orders from "../../src/ui-component/dashComp/Orders";
import Footer from "../../src/ui-component/stickyFooter";
import ButtonAppBar from "../../src/ui-component/AppBar";
import styles from "./Dashboard.module.css";

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

export default function DashboardContent() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Box sx={{ height: 250 }}>
        <Container
          maxWidth="xl"
          sx={{
            height: 1000,
            // width: 1500,
            backgroundColor: "secondary.main",
            marginTop: 10,
            padding: 10,
          }}
        >
          <CssBaseline />
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
