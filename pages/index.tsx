import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import Link from 'next/Link';
import Image from 'next/Image';
import styles from '../styles/bg.module.css';
import ResponsiveDrawer from '../src/ui-component/Drawer';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
          secondary: 'rgba(255, 209, 128, 0, 71)',

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

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link href="https://mui.com/" color="inherit">
          Crypto-Blog
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl" disableGutters={true}>
  <div>
    <div className={styles.bg}>
      <Image src="/../public/doge_bg.jpeg" layout="fill" objectFit="cover" quality={100}/>
      </div>
      <div className={styles.bgText}>
        <Stack direction="row" spacing={2}>
          <Link href="/login/SignIn" underline="hover">
            Sign In
          </Link>
          <p className={styles.slash}>/</p>
          <Link href="/login/SignUp" underline="hover">
            Sign Up
          </Link>
          <ResponsiveDrawer />
          </Stack>
        </div>
    </div>
    <div className={styles.copyright}>
    <Copyright />
    </div>
    </Container>
    </ThemeProvider>

  );
};
export default Home;