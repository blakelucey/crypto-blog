import * as React from "react";
import { styled, createTheme, ThemeProvider, CssBaseline, Container, Grid } from "@mui/material";
import ButtonAppBar from "../../src/ui-component/AppBar";
import Footer from '../../src/ui-component/stickyFooter';

const theme = createTheme({
  palette: {
    // type: 'light',
    primary: {
      main: '#546e7a',
    },
    secondary: {
      main: '#cfd8dc',
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

export default function ArbitrageContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <ButtonAppBar />
        <Grid>
          <Grid></Grid>
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
