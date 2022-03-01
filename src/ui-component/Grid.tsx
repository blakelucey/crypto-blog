import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../../styles/bg.module.css';
import { useState } from 'react';
import DataTable from './Table';


const theme = createTheme(
    {
      palette: {
        type: 'dark',
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



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));


const fearGreed = (<img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />);


export default function VariableWidthGrid() {


  return (
      <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xl="auto">
          <Item>{fearGreed}</Item>
        </Grid>
        <Grid item xl="auto">
          <Item>
            Trending Coins...
            </Item>
          </Grid>
        <Grid item xl="auto">
          <Item>
            Exchange Rate?
            </Item>            
        </Grid>
        <Grid item xl="auto">
          <Item>
            Maybe the data table...
          </Item>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
}