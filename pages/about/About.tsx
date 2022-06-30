import * as React from 'react';
import { createTheme, ThemeProvider, Container, Typography, Paper, CssBaseline } from '@mui/material';
import styles from '../about/About.module.css';
import Link from 'next/link';
import ButtonAppBar from '../../src/ui-component/AppBar';
import Footer from '../../src/ui-component/stickyFooter';





const aboutTheme = createTheme(
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

    function Copyright(props: any) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link href="https://mui.com/">
              Crypto-Blog
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
    

function About() {
  return (
    <div>
    <ThemeProvider theme={aboutTheme}>
       <Container component = "main" maxWidth="xl">
           <ButtonAppBar />
           <CssBaseline />
           <Container maxWidth="md">
            <div className={styles.align_center}>
           <Paper elevation={15} className={styles.child}>
               <div className={styles.bg}>
               <Typography variant="h1" className={styles.title}>
                   <u>About</u>
                   </Typography>
                   <br></br>
                   <br></br>
                <Typography variant="h6" className={styles.text_color}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium pariatur temporibus ad 
                        numquam quo in et excepturi cum ipsa? Quaerat repellendus ratione atque eos exercitationem culpa aliquam recusandae? Quod!
                </Typography>
                </div>
                </Paper>
                <br></br>
                <br></br>
            </div>
            </Container>
        </Container>
        <Footer />
        </ThemeProvider>
        </div>

  );
}

export default About;
