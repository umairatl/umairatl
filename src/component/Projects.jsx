import { Box, Card, Grid, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "tss-react/mui";

import { ContentSize } from "./shared/ContentSize";
import { PROJECTS_LIST } from "../constant/projects";

const useStyles = makeStyles()((theme) => ({
  wrapBox: {
    marginTop: 40,
    marginBottom: 40,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  img: {
    width: "360px",
    height: "180px",
    filter: "brightness(0.7)",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
  wrapGridItem: {
    minHeight: 400,
    "&:hover .MuiCard-root": {
      backgroundColor: "#f0f0f0",
    },
    "&:hover .MuiTypography-root .MuiTypography-inherit": {
      color: "#A10142",
      textDecoration: "underline",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

const Projects = () => {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.wrapBox}>
      <ContentSize>
        <Typography variant="h5" textAlign="center" padding={5}>
          Projects & Hackathons
        </Typography>
        <Grid container rowGap={5} columnGap={5}>
          {PROJECTS_LIST.map((res, index) => (
            <Grid
              item
              xs={12}
              sm={5.5}
              lg={3.7}
              key={index}
              className={classes.wrapGridItem}
            >
              <Link href={res.repo} target="_blank" className={classes.link}>
                <Card
                  sx={{
                    borderRadius: "0.5rem",
                    boxShadow: "0px 15px 18px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img src={res?.img} className={classes.img} />
                  <Stack direction="column" padding={2} height="200px">
                    <Typography variant="subtitle2" fontWeight="bold">
                      {res.website} | {res.period}
                    </Typography>
                    <Stack direction="row" columnGap={1}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#A10142"
                          d="m7.775 3.275l1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018a2 2 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042m-4.69 9.64a2 2 0 0 0 2.83 0l1.25-1.25a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0a.75.75 0 0 1-.018 1.042a.75.75 0 0 1-1.042.018a2 2 0 0 0-2.83 0l-2.5 2.5a2 2 0 0 0 0 2.83"
                        />
                      </svg>

                      <Typography variant="inherit" fontSize="0.9rem">
                        {res.linkType}
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2">{res.subtitle}</Typography>
                  </Stack>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </ContentSize>
    </Box>
  );
};

export default Projects;
