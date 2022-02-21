import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from '../../src/ui-component/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import DataTable from '../../src/ui-component/Table';
import styles from './Exchanges.module.css';



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


export default function Exchanges() {
    return(
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <ButtonAppBar />
            <CssBaseline/>
            <div className={styles.table}>
            <DataTable/>
            </div>
            </Container>
            </ThemeProvider>
)};