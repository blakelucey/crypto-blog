import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveDrawer from './Drawer';
import styles from '../../styles/bg.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@material-ui/core';
import { Link, Stack, Button, Typography, Toolbar, IconButton, Box, AppBar } from '@mui/material';


const theme = createTheme(
    {
      palette: {
        // type: 'light',
        primary: {
          main: 'rgba(255,209,128,0.71)',
        },
        secondary: {
          main: '#fafafa',
        },
        text: {
          primary: '#ffd180',
        },
        divider: '#ffd180',
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
          <Typography variant="h6">
          <Button color="inherit">{sign_in}</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </Container>
    </ThemeProvider>
  );
}
