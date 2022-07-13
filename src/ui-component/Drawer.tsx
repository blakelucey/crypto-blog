import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  styled,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../../styles/bg.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { AnyTxtRecord } from "dns";
import { makeStyles } from "@material-ui/styles";
import SettingsIcon from '@mui/icons-material/Settings';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';

const useStyles = makeStyles({
  paper: {
    background: "#546e7a",
  },
});

const theme = createTheme({
  palette: {
    // type: 'light',
    primary: {
      main: '#546e7a',
    },
    secondary: {
      main: '#cfd8dc',
    },
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

type Anchor = "left";

export default function ResponsiveDrawer(this: any) {
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
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
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
            <Button variant="text">
              <ListItemIcon>
                <HomeIcon fontSize="large" className={styles.appbar}/>
              </ListItemIcon>
              <ListItemText primary="Home" className={styles.appbar} />
            </Button>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/Trade/Trade">
          <ListItem>
            <Button variant="text">
              <ListItemIcon>
                <CandlestickChartIcon fontSize="large" className={styles.appbar}/>
              </ListItemIcon>
              <ListItemText primary="Trade Opportunities" className={styles.appbar}/>
            </Button>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/about/About">
          <ListItem>
            <Button variant="text">
              <ListItemIcon>
                <InfoIcon fontSize="large" className={styles.appbar}/>
              </ListItemIcon>
              <ListItemText primary="About" className={styles.appbar}/>
            </Button>
          </ListItem>
        </Link>
      </List>
      <Divider />
      {/* For tips just make this a button to route to coinbase wallet.*/}
      <List>
        <Link href="/Dashboard/Dashboard">
          <ListItem>
            <Button variant="text">
              <ListItemIcon>
                <DashboardIcon fontSize="large" className={styles.appbar}/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" className={styles.appbar}/>
            </Button>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  );

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        {["left"].map((anchor: any) => (
          <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuIcon fontSize="large" className={styles.appbar} />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              elevation={5}
              classes={{ paper: classes.paper }}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </ThemeProvider>
  );
}
