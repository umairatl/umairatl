import { ContentSize } from "./shared/ContentSize";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ReactImg from "../asset/svg/grommet-icons--reactjs.svg";
import Divider from "@mui/material/Divider";
import { EXPERIENCE_SKILLS, MAIN_SKILLS } from "../constant/skills";
// import { MAIN_SKILLS } from "../constant/skills";

const useStyles = makeStyles()((theme) => ({
  divider: {
    border: "0.7px solid #697e50",
    // margin: "4rem 0",
  },
}));

export const Skills = () => {
  const { classes } = useStyles();

  return (
    <ContentSize>
      <Divider
        className={classes.divider}
        sx={{ width: "100%", boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.1)" }}
      />
      <Divider className={classes.divider} sx={{ margin: "0.1rem 0 3rem" }} />
      <Stack justifyContent="center" alignItems="center" width="100%">
        <Box sx={{ width: "95%" }}>
          <Typography variant="h6">Main Skills:</Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            rowGap={2}
          >
            {MAIN_SKILLS.map((res, index) => (
              <Grid item key={index}>
                <Stack direction="row" alignItems="center" columnGap={2}>
                  {res.icon}
                  <Typography variant="h8">{res.type}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" marginTop={4}>
            Have experienced with:
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            rowGap={2}
          >
            {EXPERIENCE_SKILLS.map((res, index) => (
              <Grid item key={index}>
                <Stack direction="row" alignItems="center" columnGap={2}>
                  {res.icon}
                  <Typography variant="h8">{res.type}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
      <Divider className={classes.divider} sx={{ margin: "3rem 0 0.1rem" }} />
      <Divider
        className={classes.divider}
        sx={{ width: "100%", boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.1)" }}
      />
    </ContentSize>
  );
};
