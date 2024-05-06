import { Grid, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  wrapFooter: {
    margin: "10px 0",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  img: {
    borderRadius: "50%",
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <ContentSize>
      <Grid
        container
        direction={{ md: "row", sm: "column" }}
        justifyContent="space-between"
        className={classes.wrapFooter}
      >
        <Grid item>
          <Typography>
            © 2024 Umairatul. All rights reserved. For interview purpose
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction="row" columnGap={2}>
            <Typography>LinkedIn </Typography>
            <Typography>Github </Typography>
            <Typography>LinkedIn </Typography>
          </Stack>
        </Grid>
      </Grid>
    </ContentSize>
  );
};

export default Footer;
