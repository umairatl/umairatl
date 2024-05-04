import { Grid, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import WorkExperience from "./component/WorkExperience";
import Projects from "./component/Projects";
import Education from "./component/Education";
import Footer from "./component/Footer";
import Recommendations from "./component/Recommendation";
import MobileNavbar from "./component/MobileNavbar";

const useStyles = makeStyles()((theme) => ({
  wrapGrid: {
    width: 1200,
    marginTop: 50,
    [theme.breakpoints.down("lg")]: {
      width: "85%",
    },
  },
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
  curve: {
    position: "absolute",
    height: "250px",
    width: "100%",
    bottom: "0",
    textAlign: "center",
  },
  curveBefore: {
    content: '""',
    display: "block",
    position: "absolute",
    borderRadius: "100% 50%",
    width: "55%",
    height: "100%",
    transform: "translate(85%, 60%)",
    backgroundColor: "hsl(216, 21%, 16%)",
  },
  test2: {
    width: "100%",
    background: "#8987a5",
    color: "black",
    borderRadius: `0 0 100%/97% 40px`,
    aspectRatio: 960 / 30,
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
      <Grid container direction="row" justifyContent="center" width="100%">
        <div className={classes.mobileHeader}>
          <MobileNavbar />
        </div>
        <div className={classes.test2}>
          <Box className={classes.header}>
            <NavBar
              toggleDarkMode={toggleDarkMode}
              toggleDarkTheme={toggleDarkTheme}
            />
          </Box>
          <Header />
        </div>
        <WorkExperience />
        <Projects />
        <Education />
        <Recommendations />
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}
