import { Button, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import { makeStyles } from "tss-react/mui";
import Img from "../asset/img/profilePic.png";
import { ContentSize } from "./shared/ContentSize";
import { downloadPDF } from "../helper/downloadPdf";

const useStyles = makeStyles()((theme) => ({
  btn: {
    width: "100%",
    padding: "2px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  wrapGridHeader: {
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  stackBtn: {
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <ContentSize>
      <Grid
        container
        justifyContent="space-between"
        className={classes.wrapGridHeader}
      >
        <Grid item md={6} xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            rowGap={2}
            sx={{ height: "100%" }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Hi <span />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#ba8d68"
                  d="M17.57 62.68c-2.79-4.01-3.91-7.79-1.18-10.08c2.31-1.94 5.71-2.31 9.91 2.54c0 0 12.55 14.58 16.87 18.63c.98.91 2.2 1.05 3.31-.1c.94-.98.6-1.83-.2-3c0 0-17.69-26.3-20.01-29.51c-3.87-5.37-2.38-8.84-.59-10.49c2.49-2.31 6.87-2.77 10.94 2.81l21.42 28.67c.65.69 1.7.79 2.47.25l.3-.21c.79-.56 1.02-1.63.54-2.47c-3.75-6.53-18.67-32.55-20.86-37.29c-2.52-5.47-1.44-8.25 1.23-9.86c3.17-1.91 6.15-1.77 9.71 3.52c3.86 5.76 18.85 30.01 22.66 36.53c.5.85 1.57 1.17 2.45.74c.01-.01.03-.01.04-.02c.84-.41 1.6-1.24 1.25-2.42c-2.08-6.86-12.29-28.22-14.43-33.13c-2.93-6.71-1.5-8.99 1.53-10.53c3.18-1.61 6.49-.34 8.74 4.14c1.52 3.04 28.21 51.61 28.21 51.61c-.39-7.24 1.44-12.37 3-17.52c2.84-9.37 9.71-14.24 14.69-12.05c2.59 1.14 3.06 3.41 2.78 5.15c-.56 3.38-2.94 13.85-3.4 22.05c-1.08 19.22 4.73 41.37-16.92 55.29c-14.49 9.32-30.02 7.68-40.28.51c-12.44-8.69-41.9-50.48-44.18-53.76"
                />
                <g fill="#91674d">
                  <path d="M117.68 51.77c-1.81 7.61-2.05 16.95-1.99 20.93c.24 15.51.16 28.93-15.39 41.19c-1.91 1.51-7.9 5.19-14.87 7.11c-2.24.61-1.39 1.33-.01 1.17c7.61-.88 13.38-4.16 16.59-6.23c21.64-13.92 16.32-35.92 17.4-55.14c.46-8.2 2.96-21.1 2.92-22.21c-.05-1.11-2.84 5.57-4.65 13.18m-40.15.8s-1.55.01-3.02-2.04C70.1 44.4 56.27 21.25 52.29 15.57c-4.54-6.48-8.77-4-9.73-3.48c0 0 3.48.12 5.4 2.97c3.92 5.81 18.78 31.85 23.47 37.44c3.03 3.61 6.1.07 6.1.07m-54.82 1.97c1.36 1.46 13.3 15.63 17.7 19.58c3.78 3.39 6.6-.93 6.6-.93s-1.39.19-3.29-1.24C39 68.38 27.82 55.65 25.3 52.97c-3.74-3.98-7.22-1.49-7.96-1.04c.01 0 2.15-.83 5.37 2.61m38.88 6.72s-1.28.93-3.63-1.82c-1.71-2.01-21.34-25.96-21.34-25.96c-4.92-6.01-8.79-4.22-9.59-3.76c0 0 2.47-.13 5.36 3.2c1.32 1.52 22.27 28.23 23.11 29.14c3.07 3.35 5.91.47 6.09-.8" />
                  <path d="M101.8 57.83S75.79 14.22 74.13 11.25c-3.69-6.59-7.98-4.57-8.71-4.24c0 0 2.39-.68 5.2 4.1c1.5 2.54 20.61 36.9 26.71 47.88c.48 2.05.44 4.72-1.1 6.44c-5.52 6.19-12.56 12.51-10.49 28.18c.52 3.97 1.99 7.73 3.08 9.54c1.38 2.27 2.97 1.41 2.27-.29c-.47-1.15-1.22-3.86-1.37-5.02c-.7-5.4-3.06-14.84 7.52-26.16c1.79-1.89 6.34-7.6 4.56-13.85" />
                </g>
                <path
                  fill="#b0bec5"
                  d="M103.49 30.96c-1.39-4.93-3.55-9.45-6.35-13.37c-2.52-3.53-5.57-6.57-9.05-9.01c-.44-.31-1-1.27-.52-2.2s1.52-.81 1.91-.65c4.35 1.79 7.91 4.88 10.85 9.12c3.49 5.04 5.22 9.79 6.11 15.1c.1.58.08 1.8-1.16 2.12c-1.23.32-1.65-.63-1.79-1.11m-6.8 5.29c-1.39-4.93-3.55-9.45-6.35-13.37c-2.52-3.53-5.57-6.57-9.05-9.01c-.44-.31-1-1.27-.52-2.2c.48-.94 1.52-.81 1.91-.65c4.35 1.79 7.91 4.88 10.85 9.12c3.49 5.04 5.22 9.79 6.11 15.1c.1.58.08 1.8-1.16 2.12c-1.22.32-1.65-.62-1.79-1.11M8.56 77.46c1.72 4.83 4.17 9.19 7.22 12.92c2.75 3.35 5.99 6.19 9.62 8.4c.46.28 1.08 1.2.66 2.16c-.42.97-1.46.91-1.87.78c-4.46-1.5-8.22-4.35-11.43-8.39c-3.81-4.8-5.86-9.42-7.1-14.66c-.14-.58-.2-1.79 1.02-2.19c1.22-.4 1.71.51 1.88.98m6.43-5.73c1.72 4.83 4.17 9.19 7.22 12.92c2.75 3.35 5.99 6.19 9.62 8.4c.46.28 1.08 1.2.66 2.16c-.42.97-1.46.91-1.87.78c-4.46-1.5-8.22-4.35-11.43-8.39c-3.81-4.8-5.86-9.42-7.1-14.66c-.14-.58-.2-1.79 1.02-2.19c1.22-.41 1.71.51 1.88.98"
                />
              </svg>
              ,
              <br /> I'm Umaira, <br /> Front-end Developer
            </Typography>
            <Typography
              variant="subtitle1"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration={100}
            >
              Transforming design concepts into stunning and functional web
              experiences is my specialty.
            </Typography>
            <Typography
              variant="subtitle2"
              color="#595959"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration={300}
            >
              Proficient in HTML, CSS, JavaScript, TypeScript, ReactJs, Next.js.
              Dedicated to pushing boundaries and fostering collaboration within
              dynamic teams to achieve excellence.
            </Typography>
            <Stack className={classes.stackBtn} columnGap={1} rowGap={2}>
              <Button
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
                onClick={downloadPDF}
                variant="outlined"
                className={classes.btn}
                sx={{
                  border: "2px solid #3A5202",
                  color: "#3A5202",
                  "&:hover": {
                    background: "#F7EEED",
                    color: "#A10142",
                    border: "2px solid #A10142",
                  },
                }}
              >
                Hire me
              </Button>
              <Button
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
                href="#Projects"
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
        <Grid item xs={12} md={5}>
          <img src={Img} className={classes.img} alt="profile img" />
        </Grid>
      </Grid>
    </ContentSize>
  );
};

export default Header;
