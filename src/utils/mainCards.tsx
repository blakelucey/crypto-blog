import {
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Divider,
  Grid,
  Stack,
  Tooltip,
  Box,
} from "@mui/material";
import styles from "./mainCards.module.css";

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

export default function About() {
  return (
      <Container maxWidth="lg">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" color="#546e7a" flexItem />}
          justifyContent="center"
          alignItems="center"
          spacing={12}
        >
          <Card sx={{ minWidth: 250, backgroundColor: '#546e7a'}} className={styles.card}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body1" color="#cfd8dc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mauris cursus mattis molestie a iaculis at erat pellentesque.
                  Volutpat odio facilisis mauris sit amet massa. Lorem dolor sed
                  viverra ipsum nunc aliquet bibendum enim. Ullamcorper eget
                  nulla facilisi etiam dignissim diam quis enim lobortis.
                  Convallis a cras semper auctor neque vitae. In dictum non
                  consectetur a erat nam at lectus urna. Turpis egestas integer
                  eget aliquet nibh praesent. Etiam sit amet nisl purus in
                  mollis nunc sed. Eget sit amet tellus cras adipiscing.{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ minWidth: 250, backgroundColor: '#546e7a' }} className={styles.card}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body1" color="#cfd8dc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mauris cursus mattis molestie a iaculis at erat pellentesque.
                  Volutpat odio facilisis mauris sit amet massa. Lorem dolor sed
                  viverra ipsum nunc aliquet bibendum enim. Ullamcorper eget
                  nulla facilisi etiam dignissim diam quis enim lobortis.
                  Convallis a cras semper auctor neque vitae. In dictum non
                  consectetur a erat nam at lectus urna. Turpis egestas integer
                  eget aliquet nibh praesent. Etiam sit amet nisl purus in
                  mollis nunc sed. Eget sit amet tellus cras adipiscing.{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ minWidth: 250, backgroundColor: '#546e7a' }} className={styles.card}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body1" color="#cfd8dc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mauris cursus mattis molestie a iaculis at erat pellentesque.
                  Volutpat odio facilisis mauris sit amet massa. Lorem dolor sed
                  viverra ipsum nunc aliquet bibendum enim. Ullamcorper eget
                  nulla facilisi etiam dignissim diam quis enim lobortis.
                  Convallis a cras semper auctor neque vitae. In dictum non
                  consectetur a erat nam at lectus urna. Turpis egestas integer
                  eget aliquet nibh praesent. Etiam sit amet nisl purus in
                  mollis nunc sed. Eget sit amet tellus cras adipiscing.{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
      </Container>
  );
}
