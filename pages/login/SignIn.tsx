import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styles from "./signIn.module.css";
import {
  Paper,
  Typography,
  Container,
  Box,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import ButtonAppBar from "../../src/ui-component/AppBar";
import Footer from "../../src/ui-component/stickyFooter";

const theme = createTheme({
  palette: {
    // type: 'light',
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#607d8b',
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

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              className={styles.text_color}
            >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="primary"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                className={styles.text_color}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    <div className={styles.text_color}>Forgot password?</div>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login/SignUp" variant="body2">
                    <div className={styles.text_color}>
                      {"Don't have an account? Sign Up"}
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </ThemeProvider>
  );
}
