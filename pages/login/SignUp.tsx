import * as React from 'react';
import { 
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Paper,
  createTheme, ThemeProvider
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './signUp.module.css';
import ButtonAppBar from '../../src/ui-component/AppBar';
import Footer from '../../src/ui-component/stickyFooter';

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


export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper elevation={5} className={styles.padding}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
           }}
          >
           <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
             <LockOutlinedIcon />
           </Avatar>
            <Typography component="h1" variant="h5" className={styles.text_color}>
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
               </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    className={styles.text_color}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login/SignIn" variant="body2">
                    <div className={styles.text_color}>
                    Already have an account? Sign in
                    </div>
                  </Link>
               </Grid>
              </Grid>
            </Box>
          </Box>
          </Paper>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}