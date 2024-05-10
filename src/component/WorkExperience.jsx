import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import Deriv from "../asset/img/deriv.png";
import Doctor2u from "../asset/img/doctor2u.jpg";
import MM from "../asset/img/mmLogo.png";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  wrapBox: {
    marginTop: 40,
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  },
  img: {
    borderRadius: "50%",
  },
  btn: {
    background: "#A10142 20%",
    color: "white",
    "&:hover": { background: "#697E50" },
    width: "20%",
    padding: "0.5rem 0",
  },
  period: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const WorkExperience = () => {
  const { classes } = useStyles();
  const theme = useTheme();
  const work = [
    {
      img: MM,
      company: "MoneyMatch",
      title: "Front-end Software Engineer",
      period: "February 2023 – April 2024",
    },
    {
      img: Deriv,
      company: "Deriv",
      title: "Besquare Programme Trainee",
      period: "July 2022 – December 2022 ",
    },
    {
      img: Doctor2u,
      company: "Doctor2u",
      title: "IT Programmer",
      period: "September 2021 – June 2022",
    },
  ];

  return (
    <ContentSize id="Experience">
      <Box className={classes.wrapBox}>
        <Card sx={{ padding: 5, borderRadius: 5 }}>
          <Typography varaint="h5" textAlign="start" fontWeight="bold">
            Work Experience
          </Typography>
          {work.map((res, index) => (
            <Grid
              container
              justifyContent="space-between"
              key={index}
              margin="10px 0px"
              data-aos="fade-up"
              data-aos-duration={200 + index * 100}
              data-aos-easing="ease-in-out"
            >
              <Stack direction="row" alignItems="center" columnGap={2}>
                <img
                  alt="company logo"
                  src={res.img}
                  width={40}
                  height={40}
                  className={`${classes.img} ${
                    theme.palette.mode === "dark"
                      ? "dark:border-zinc-700/50 dark:ring-zinc-900/5"
                      : ""
                  }`}
                />
                <Stack direction="column">
                  <Typography variant="subtitle1">{res.company}</Typography>
                  <Typography variant="subtitle2">{res.title}</Typography>
                </Stack>
              </Stack>
              <Typography variant="subtitle1" className={classes.period}>
                {res.period}
              </Typography>
            </Grid>
          ))}
          {/* <Stack direction="row" justifyContent="center" marginTop={5}>
            <Button variant="contained" className={classes.btn}>
              Download CV
            </Button>
          </Stack> */}
        </Card>
      </Box>
    </ContentSize>
  );
};

export default WorkExperience;
