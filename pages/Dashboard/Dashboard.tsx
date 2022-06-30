import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ButtonAppBar from '../../src/ui-component/AppBar';
import VariableWidthGrid from '../../src/ui-component/Grid';
import styles from './Dashboard.module.css';
import Footer from '../../src/ui-component/stickyFooter';

const theme = createTheme({
  palette: {
    // type: 'light',
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#607d8b',
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

export default function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <ButtonAppBar/>
        <div className={styles.grid}>
        <VariableWidthGrid />
        </div>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
