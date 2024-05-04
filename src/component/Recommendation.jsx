import { Grid, Typography, Stack, Box, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import { Carousel } from "react-responsive-carousel";
import { feedback } from "../constant/feedback";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  wrapBox: {
    margin: "5rem 0px",
  },
  img: {
    width: "60px !important",
    height: "60px",
    borderRadius: "50%",
  },
  wrapGridItem: {
    minHeight: 400,
  },
  wrapCard: {
    width: "80%",
  },
  wrapStack: {
    padding: "5rem 0px",
    background: "white",
    height: "350px",
    color: "black",
  },
  arrowIcons: {
    width: 32,
    height: 32,
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
  },
  wrapCarousel: {
    width: "800px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  wrapItemFeedback: {
    height: "300px",
    [theme.breakpoints.down("md")]: {
      height: "450px",
    },
  },
}));

const HandleArrowNext = (props) => {
  const { classes } = useStyles();
  const { clickHandler, hasNext } = props || {};

  return (
    hasNext && (
      <ChevronRightIcon
        onClick={clickHandler}
        className={classes.arrowIcons}
        style={{
          background: "rgba(255, 255, 255, 0.50)",
          right: 0,
          width: "40px",
          height: "40px",
          borderRadius: "40px",
        }}
      />
    )
  );
};

const HandleArrowPrev = (props) => {
  const { classes } = useStyles();
  const { clickHandler, hasPrev } = props || {};

  return (
    hasPrev && (
      <ChevronLeftIcon
        onClick={clickHandler}
        className={classes.arrowIcons}
        style={{
          background: "rgba(255, 255, 255, 0.50)",
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "40px",
        }}
      />
    )
  );
};

const Recommendations = () => {
  const { classes } = useStyles();

  return (
    <Box sx={{background: 'pink', width: '100%', margin: '2rem 0rem'}}>
      <ContentSize>
        <Grid container direction="column" justifyContent='center' alignContent='center' width='100%'>
        <Typography variant="h5" marginBottom="2rem" textAlign='center'>
          Feedbacks & Recommendations
        </Typography>
      <Grid item className={classes.wrapCarousel}>
        <Carousel
          autoPlay
          infiniteLoop
          interval="5000"
          transitionTime="5000"
          showThumbs={false}
          emulateTouch
          preventMovementUntilSwipeScrollTolerance
          renderArrowPrev={(clickHandler, hasPrev) => (
            <HandleArrowPrev clickHandler={clickHandler} hasPrev={hasPrev} />
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <HandleArrowNext clickHandler={clickHandler} hasNext={hasNext} />
          )}
        >
          {feedback.map((res, index) => (
            <Card
              key={index}
              sx={{ padding: "2rem 3rem", marginBottom: '1rem' }}
            >
              <Grid container rowGap={3}>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    columnGap={2}
                  >
                    <Grid item height="100%">
                      <img
                        src={res.img}
                        width={60}
                        height={60}
                        className={classes.img}
                      />
                    </Grid>
                    <Grid item>
                      <Stack direction="column" textAlign="left">
                        <Typography>{res.name}</Typography>
                        <Typography>{res.position}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={classes.wrapItemFeedback}>
                  <Typography variant="subtitle1" textAlign="left">
                    "{res.feedback}"
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Carousel>
        </Grid>
        </Grid>
        </ContentSize>
        </Box>
  );
};

export default Recommendations;
