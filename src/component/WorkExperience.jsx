import { Box, Card, Typography, Grid, Stack, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import MM from "../asset/mmLogo.png";
import Deriv from "../asset/deriv.png";
import Doctor2u from "../asset/doctor2u.jpg";
import { useTheme } from "@mui/material/styles";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  wrapBox: {
    marginTop: 40,
  },
  img: {
    borderRadius: "50%",
  },
  btn: {
    width: "20%",
    padding: "0.5rem 0",
    background: "#423944",
    color: "white",
    borderRadius: "1rem",
    [theme.breakpoints.down('md')]:{
      width: '100%'
    }
  },
  period:{
    [theme.breakpoints.down('md')]:{
      display: 'none'
    }
  }
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
      company: "BP Healthcare",
      title: "IT Programmer",
      period: "September 2021 – June 2022",
    },
  ];

  return (
    <ContentSize>
    <Box className={classes.wrapBox}>
      <Card sx={{ padding: 5, borderRadius: 5 }}>
        <Typography varaint="h5" textAlign="start">
          Work Experience
        </Typography>
        {work.map((res, index) => (
          <Grid
            container
            justifyContent="space-between"
            key={index}
            margin="10px 0px"
          >
            <Stack direction="row" alignItems="center" columnGap={2}>
              <img
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
            <Typography variant="subtitle1" className={classes.period}>{res.period}</Typography>
          </Grid>
        ))}
        <Stack direction="row" justifyContent='center' marginTop={5}>
        <Button variant="contained" className={classes.btn}>Download CV</Button>
        </Stack>
      </Card>
    </Box>
    </ContentSize>
  );
};

export default WorkExperience;
