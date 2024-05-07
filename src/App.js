import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import Education from "./component/Education";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MobileNavbar from "./component/MobileNavbar";
import NavBar from "./component/NavBar";
import Projects from "./component/Projects";
import Recommendations from "./component/Recommendation";
import { Skills } from "./component/Skills";
import WorkExperience from "./component/WorkExperience";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles()((theme) => ({
  img: {
    width: "100%",
    height: "100%",
  },
  header: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileHeader: {
    display: "none",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  wrapGrid: {
    width: 1300,
    background: "white",
    marginTop: 35,
    marginBottom: 35,
    padding: "1rem 5rem",
    [theme.breakpoints.down("lg")]: {
      padding: "1rem 3rem",
      width: "95%",
    },
    [theme.breakpoints.down("md")]: {
      margin: "10px 0px",
      padding: "0px",
    },
  },
}));

export default function App() {
  const { classes } = useStyles();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justifyContent="center"
        width="100%"
        sx={{ background: "linear-gradient(90deg, #ECDBC7 50%, #697E50 50%)" }}
      >
        <div className={classes.mobileHeader}>
          <MobileNavbar />
        </div>
        <Grid item className={classes.wrapGrid}>
          <div className={classes.header}>
            <NavBar />
          </div>
          <Header />
          <Skills />
          <WorkExperience />
          <Projects />
          <Education />
          <Recommendations />
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
