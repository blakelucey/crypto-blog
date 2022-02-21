import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveDrawer from './Drawer';
import styles from '../../styles/bg.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';


const theme = createTheme(
    {
      palette: {
        // type: 'dark',
        primary: {
          main: 'rgba(255,209,128,0.71)',
        },
        secondary: {
          main: '#fafafa',
        },
        background: {
          default: '#212121',
          paper: 'rgba(97,97,97,0.58)',
        },
        text: {
          primary: '#ffd180',
        },
        divider: 'rgba(255,209,128,0.71)',
      },
      typography: {
        fontFamily: 'Droid Serif',
        // fontWeightBold: 800,
        body2: {
          fontSize: '1rem',
        },
        body1: {
          fontSize: '1.2rem',
        },
      },
    });

const sign_in = (<Stack direction="row" spacing={2}>
<Link href="/login/SignIn" underline="hover" className={styles.appbar}>
  Sign In
</Link>
<p>/</p>
<Link href="/login/SignUp" underline="hover" className={styles.appbar}>
  Sign Up
</Link>
</Stack>);

export default function ButtonAppBar() {
  return (
      <ThemeProvider theme={theme}>
          <Container maxWidth="xl">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary">
        <Toolbar>
          <ResponsiveDrawer />
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <Typography>
          <Button color="inherit" variant="h6">{sign_in}</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </Container>
    </ThemeProvider>
  );
}
