import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../../styles/bg.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';



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

type Anchor = 'left';

export default function ResponsiveDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/">
          <ListItem>
            <ListItemIcon>
              <HomeIcon fontSize='large'/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/profile/Dashboard">
          <ListItem>
            <ListItemIcon>
              <DashboardIcon fontSize='large'/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/Arbitrage/Arbitrage">
          <ListItem >
            <ListItemIcon>
              <PriceChangeIcon fontSize='large'/>
            </ListItemIcon>
            <ListItemText primary="Arbitrage Opportunities" />
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
        <Link href="/about/About">
          <ListItem>
            <ListItemIcon>
              <InfoIcon fontSize='large'/>
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      {/*For tips just make this a button to route to coinbase wallet.*/}
      <List>
        <Link href="/">
          <ListItem>
            <ListItemIcon>
              <MonetizationOnIcon fontSize='large'/>
            </ListItemIcon>
            <ListItemText primary="Tip"/>
          </ListItem>
          </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
      <ThemeProvider theme={theme}>
    <div>
      {(['left']).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}><MenuIcon fontSize='large'/></IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </ThemeProvider>
  );
}