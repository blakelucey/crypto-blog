import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styles from "./signUp.module.css";
import ButtonAppBar from "../../src/ui-component/AppBar";
import Footer from "../../src/ui-component/stickyFooter";
import axios from "axios";
import { useState } from "react";

const theme = createTheme({
  palette: {
    // type: 'light',
    primary: {
      main: "#546e7a",
    },
    secondary: {
      main: "#cfd8dc",
    },
  },
  typography: {
    fontFamily: "Droid Serif",
    fontWeightBold: 800,
    body2: {
      fontSize: "1.6rem",
    },
    body1: {
      fontSize: "1.7rem",
    },
  },
});

export default function SignUp() {
  // const [firstName, setFirstName]: string = useState();
  // const [lastName, setLastName]: string = useState();
  // const [email, setEmail]: string = useState();
  // const [password, setPassword]: string = useState();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email");
    let password = data.get("password");
    let firstname = data.get("firstName");
    let lastname = data.get("lastName");
    console.log(firstname, lastname, email, password);
    const response: any = await axios.post(`/api/signUp?firstname=${firstname}&lastname=${lastname}&email=${email}&password=${password}`);
    console.log("response: ", response.data);
  };

  // const fetchData: any = async () => {
  //   const response: any = await axios.post(`/api/signUp`, {
  //     email, password, firstName, lastName
  //   })
  // }

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={styles.padding2}>
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
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
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
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
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
        </div>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
