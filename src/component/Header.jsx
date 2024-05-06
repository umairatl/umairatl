import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import * as React from "react";
import { ContentSize } from "./shared/ContentSize";
import Img from "../asset/profilePic.png";

const useStyles = makeStyles()((theme) => ({
  btn: {
    width: "100%",
    padding: "2px 0",
    // background: "#423944",
    // color: "white",
  },
  img: {
    width: "100%",
    height: "100%",
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <ContentSize>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item lg={6} xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            rowGap={2}
            sx={{ height: "100%" }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Hi, <br /> I'm Umaira <br /> Front-end Developer
            </Typography>
            <Typography variant="h7">
              Transforming design concepts into stunning and functional web
              experiences is my specialty.
            </Typography>
            <Typography variant="h7" color="#595959">
              Proficient in HTML, CSS, JavaScript, TypeScript, ReactJs, Next.js
              and Angular. Dedicated to pushing boundaries and fostering
              collaboration within dynamic teams to achieve excellence.
            </Typography>
            {/* <Stack direction="row" columnGap={1}>
              <LinkedInIcon /> umairatul asyiqin
            </Stack>
            <Stack direction="row" columnGap={1}>
              <GitHubIcon /> umairatl
            </Stack>
            <Stack direction="row" columnGap={1}>
              <EmailIcon /> umairatlwork@gmail.com
            </Stack> */}
            <Stack direction="row" columnGap={1}>
              <Button
                variant="outlined"
                className={classes.btn}
                sx={{
                  border: "2px solid #3A5202",
                  color: "#3A5202",
                  "&:hover": {
                    background: "#F0EAD6",
                    color: "#A10142",
                    border: "2px solid #A10142",
                  },
                }}
              >
                Hire me
              </Button>
              <Button
                variant="contained"
                className={classes.btn}
                sx={{
                  background: "#A10142 20%",
                  color: "white",
                  "&:hover": { background: "#697E50" },
                }}
              >
                See my projects
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={5}>
          <img src={Img} className={classes.img} />
        </Grid>
      </Grid>
    </ContentSize>
  );
};

export default Header;
