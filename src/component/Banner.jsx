import { ContentSize } from "./shared/ContentSize";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  wrapLayout: {
    width: "100%",
  },
}));

export const Banner = () => {
  const { classes } = useStyles();

  return (
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
  );
};
