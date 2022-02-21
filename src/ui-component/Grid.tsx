import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
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
          <Item>xl=auto</Item>
        </Grid>
        <Grid item xl="auto">
          <Item>xl=auto</Item>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
}