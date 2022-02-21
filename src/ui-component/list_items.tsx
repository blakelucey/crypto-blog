import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import Link from 'next/link';
import Divider from '@mui/material/Divider';



export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
      <InfoIcon fontSize='large'/>
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItemButton>
    <Divider />
    <ListItemButton>
      <ListItemIcon>
      <DashboardIcon fontSize='large'/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <Divider/>
    <ListItemButton>
      <ListItemIcon>
      <ShowChartIcon fontSize='large'/>      
      </ListItemIcon>
      <ListItemText primary="Exchanges" />
    </ListItemButton>
    <Divider/>
    <ListItemButton>
      <ListItemIcon>
      <PriceChangeIcon fontSize='large'/>
        </ListItemIcon>
      <ListItemText primary="Arbitrage Opportunities" />
    </ListItemButton>
    <Divider/>
    <ListItemButton>
      <ListItemIcon>
      <MonetizationOnIcon fontSize='large'/>      
      </ListItemIcon>
      <ListItemText primary="Tip" />
    </ListItemButton>
  </React.Fragment>
);