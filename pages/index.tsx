import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/Link';
import Image from 'next/Image';
import styles from '../styles/bg.module.css';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="black" href="https://mui.com/">
          Crypto-Blog
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const Home: NextPage = () => {
  return (
  <div>
    <div className={styles.bg}>
      <Image src="/../public/to_the_moon.gif" layout="fill" quality={100}/>
      </div>
      <div className={styles.bgText}>
        <Link href="/SignIn" color="secondary">
          <h2>Go to the about page</h2>
          </Link>
          <Copyright />
        </div>
    </div>
  );
};
export default Home;