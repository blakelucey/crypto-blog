import * as React from 'react';
import { Box, Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, ListItemButton, 
IconButton }  from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
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
import { AnyTxtRecord } from 'dns';



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

type Anchor = 'left';

export default function ResponsiveDrawer() {
  const [state, setState]: any = React.useState({
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
            <Button>
              <ListItemIcon>
               <HomeIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </Button>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/Dashboard/Dashboard">
          <ListItem>
            <Button>
              <ListItemIcon>
                <DashboardIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText primary="Dashboard"/>
            </Button>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/Arbitrage/Arbitrage">
          <ListItem >
            <Button>
              <ListItemIcon>
                <PriceChangeIcon fontSize='large'/>
              </ListItemIcon>
             <ListItemText primary="Arbitrage Opportunities" />
            </Button>
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
        <Link href="/about/About">
          <ListItem>
            <Button>
              <ListItemIcon>
               <InfoIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText primary="About" />
            </Button>
          </ListItem>
        </Link>
      </List>
      <Divider />
      {/*For tips just make this a button to route to coinbase wallet.*/}
      <List>
        <Link href="/">
          <ListItem>
            <Button>
              <ListItemIcon>
                <MonetizationOnIcon fontSize='large'/>
             </ListItemIcon>
              <ListItemText primary="Tip"/>
            </Button>
          </ListItem>
          </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
      <ThemeProvider theme={theme}>
    <div>
      {(['left']).map((anchor: any) => (
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