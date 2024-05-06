import { Grid, Typography, Stack, Box, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import { Carousel } from "react-responsive-carousel";
import { feedback } from "../constant/feedback";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ContentSize } from "./shared/ContentSize";
import Divider from "@mui/material/Divider";
import QR from "../asset/quoteRight.png";
import QL from "../asset/quoteLeft.png";

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
    paddingRight: "3.5rem",
    // width: "70%",
    // width: "800px",
    // marginRight: "5rem",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  wrapItemFeedback: {
    // height: "250px",
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
    <Box sx={{ width: "100%", margin: "2rem 0rem" }}>
      <ContentSize>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={3}>
            <Typography variant="h6">Feedbacks & Recommendations</Typography>
          </Grid>

          <Grid item xs={9}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={11}>
                <Divider sx={{ border: "1px solid black", width: "98%" }} />
              </Grid>
              <Grid item xs={1}>
                <img src={QR} />
              </Grid>
            </Grid>

            <Grid
              container
              className={classes.wrapCarousel}
              justifyContent="flex-end"
            >
              <Grid item width="800px">
                <Carousel
                  autoPlay
                  infiniteLoop
                  interval="5000"
                  showIndicators={false}
                  transitionTime="5000"
                  showThumbs={false}
                  emulateTouch
                  preventMovementUntilSwipeScrollTolerance
                  renderArrowPrev={(clickHandler, hasPrev) => (
                    <HandleArrowPrev
                      clickHandler={clickHandler}
                      hasPrev={hasPrev}
                    />
                  )}
                  renderArrowNext={(clickHandler, hasNext) => (
                    <HandleArrowNext
                      clickHandler={clickHandler}
                      hasNext={hasNext}
                    />
                  )}
                >
                  {feedback.map((res, index) => (
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
                  ))}
                </Carousel>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              marginTop={0}
            >
              <Grid item xs={1}>
                <img src={QL} />
              </Grid>
              <Grid item xs={11}>
                <Divider sx={{ border: "1px solid black", width: "98%" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContentSize>
    </Box>
  );
};

export default Recommendations;
