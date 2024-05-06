import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import Pic from "./asset/wallpaper.png";
import Education from "./component/Education";
import Footer from "./component/Footer";
import MobileNavbar from "./component/MobileNavbar";
import NavBar from "./component/NavBar";
import Projects from "./component/Projects";
import Recommendations from "./component/Recommendation";
import WorkExperience from "./component/WorkExperience";
import Header from "./component/Header";
import { Skills } from "./component/Skills";

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
      width: "85%",
    },
  },
}));

export default function App() {
  const { classes } = useStyles();
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justifyContent="center"
        width="100%"
        sx={{ background: "linear-gradient(90deg, #F0EAD6 50%, #697E50 50%)" }}
      >
        <Grid item className={classes.wrapGrid}>
          <div className={classes.mobileHeader}>
            <MobileNavbar />
          </div>
          <div className={classes.header}>
            <NavBar
              toggleDarkMode={toggleDarkMode}
              toggleDarkTheme={toggleDarkTheme}
            />
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
