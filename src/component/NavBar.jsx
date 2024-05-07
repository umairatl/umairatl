import { Grid, Link, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import img from "../asset/header.png";
import { NAVBAR_OPTONS } from "../constant/navbar";
import { downloadPDF } from "../helper/downloadPdf";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  wrapNav: {
    width: 1200,
    marginTop: 50,
    [theme.breakpoints.down("lg")]: {
      width: "85%",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
    ":hover": {
      textDecoration: "underline",
      color: "#A10142",
      cursor: "pointer",
    },
  },
}));

const NavBar = () => {
  const { classes } = useStyles();

  const onClickLink = (link) => {
    if (link === "CV") {
      downloadPDF();
    } else {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    }
  };

  return (
    <ContentSize>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        className="navbar"
      >
        <Grid item>
          <Stack direction="row" alignItems="center" columnGap={1}>
            <img src={img} width={40} height={40} alt="logo" />
            <Typography variant="subtitle1">{`<umairatl />`}</Typography>
          </Stack>
        </Grid>
        <Grid item mr={4}>
          <Stack direction="row" alignItems="center" columnGap={2}>
            {NAVBAR_OPTONS.map((res, index) => (
              <Link
                key={index}
                onClick={() => onClickLink(res.link)}
                className={classes.link}
              >
                <Typography variant="h7" fontWeight="bold">
                  {res.title}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </ContentSize>
  );
};

export default NavBar;
