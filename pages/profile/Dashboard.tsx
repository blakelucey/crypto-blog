import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../../src/ui-component/list_items';
import Chart from '../../src/ui-component/Chart';
// import Deposits from '../src/ui-component/Deposits';
import Orders from '../../src/ui-component/Orders';
import { AppBar } from '@material-ui/core';
import ResponsiveDrawer from '../../src/ui-component/Drawer';
import ButtonAppBar from '../../src/ui-component/AppBar';
import VariableWidthGrid from '../../src/ui-component/Grid';
import styles from './Dashboard.module.css';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Crypto-Blog
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

function DashboardContent() {
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
        <br></br>
        <br></br>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}