import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "tss-react/mui";
import QL from "../asset/quoteLeft.png";
import QR from "../asset/quoteRight.png";
import { feedback } from "../constant/feedback";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  img: {
    width: "60px !important",
    height: "60px",
    borderRadius: "50%",
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
    paddingRight: "1rem",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  wrapItemFeedback: {
    height: "300px",
    [theme.breakpoints.down("md")]: {
      height: "450px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "750px",
    },
  },
  quoteImg: {
    width: "100%",
    height: "50%",
  },
  carouselContainer: {
    "& .carousel .control-dots .dot": {
      background: "#697E50",
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
      <ContentSize id="Feedback">
        <Grid container direction="row" alignItems="center" rowGap={4}>
          <Grid item sm={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Feedbacks & Recommendations
            </Typography>
          </Grid>

          <Grid item sm={12} md={9} width="100%">
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
                <img alt="quote right" src={QR} className={classes.quoteImg} />
              </Grid>
            </Grid>

            <Grid
              container
              className={classes.wrapCarousel}
              justifyContent="flex-end"
            >
              <Grid item xs={12}>
                <Carousel
                  className={classes.carouselContainer}
                  transitionTime="2000"
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
                    <Grid container key={index} rowGap={3}>
                      <Grid item xs={12}>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          columnGap={2}
                        >
                          <Grid item height="100%">
                            <img
                              alt="profile pic"
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
              columnGap={1}
            >
              <Grid item xs={1}>
                <img src={QL} className={classes.quoteImg} alt="quote left" />
              </Grid>
              <Grid item xs={10.5}>
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
