import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from '../../src/ui-component/Drawer';
import styles from '../about/About.module.css';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Link from 'next/link';
import ButtonAppBar from '../../src/ui-component/AppBar';





const aboutTheme = createTheme(
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
    

function About() {
  return (
    <ThemeProvider theme={aboutTheme}>
       <Container component = "main" maxWidth="xl">
           <ButtonAppBar />
           <CssBaseline />
           <Container maxWidth="md">
            <div className={styles.align_center}>
           <Paper elevation={24} variant='outlined' className={styles.child}>
               <div className={styles.bg}>
               <Typography variant="h1" className={styles.title}>
                   <u>About</u>
                   </Typography>
                   <br></br>
                   <br></br>
                <Typography variant="h6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium pariatur temporibus ad 
                        numquam quo in et excepturi cum ipsa? Quaerat repellendus ratione atque eos exercitationem culpa aliquam recusandae? Quod!
                </Typography>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Copyright />
                </div>
            </Paper>
            </div>
            </Container>
        </Container>
        </ThemeProvider>

  );
}

export default About;
