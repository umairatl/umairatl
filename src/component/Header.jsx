import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Img from "../asset/pana2.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import * as React from "react";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  wrapGrid: {
    width: 1200,
    margin: "5rem 0rem",
  },
  img: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      height: "85%",
    },
  },
  btn: {
    width: "100%",
    padding: "0.5rem 0",
    background: "#423944",
    color: "white",
    borderRadius: "1rem",
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    // <Box className={classes.wrapGrid}>
    <ContentSize>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item lg={5.5} xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            rowGap={2}
            sx={{ height: "100%" }}
          >
            <Typography variant="h4" component="h1">
              Front-end Developer
            </Typography>
            <Typography variant="subtitle1">
              Transforming design concepts into stunning and functional web
              experiences is my specialty.
            </Typography>
            <Typography>
              Proficient in HTML, CSS, JavaScript, TypeScript, ReactJs, Next.js
              and Angular. Dedicated to pushing boundaries and fostering
              collaboration within dynamic teams to achieve excellence.
            </Typography>
            <Stack direction="row" columnGap={1}>
              <LinkedInIcon /> umairatul asyiqin
            </Stack>
            <Stack direction="row" columnGap={1}>
              <GitHubIcon /> umairatl
            </Stack>
            <Stack direction="row" columnGap={1}>
              <EmailIcon /> umairatlwork@gmail.com
            </Stack>
            {/* <Button variant="contained" className={classes.btn}>
              Download CV
            </Button> */}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={5}>
          <img src={Img} className={classes.img} />
        </Grid>
      </Grid>
      </ContentSize>
    // </Box>
  );
};

export default Header;
