import { ContentSize } from "./shared/ContentSize";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Divider from "@mui/material/Divider";
import { EXPERIENCE_SKILLS, MAIN_SKILLS } from "../constant/skills";

const useStyles = makeStyles()((theme) => ({
  divider: {
    border: "0.7px solid #697e50",
  },
}));

export const Skills = () => {
  const { classes } = useStyles();

  return (
    <ContentSize id="Skills">
      <Divider
        className={classes.divider}
        sx={{ width: "100%", boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.1)" }}
      />
      <Divider className={classes.divider} sx={{ margin: "0.1rem 0 3rem" }} />
      <Stack justifyContent="center" alignItems="center" width="100%">
        <Box sx={{ width: "95%" }}>
          <Typography variant="subtitle1" fontWeight="bold" marginBottom={1}>
            Main Skills:
          </Typography>
          <Grid container direction="row" rowGap={2}>
            {MAIN_SKILLS.map((res, index) => (
              <Grid item xs={6} md={2} key={index}>
                <Stack direction="row" alignItems="center" columnGap={2}>
                  {res.icon}
                  <Typography variant="subtitle1">{res.type}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="subtitle1"
            fontWeight="bold"
            marginTop={4}
            marginBottom={1}
          >
            Have experienced with:
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            rowGap={2}
          >
            {EXPERIENCE_SKILLS.map((res, index) => (
              <Grid item xs={6} md={2} key={index}>
                <Stack direction="row" alignItems="center" columnGap={2}>
                  {res.icon}
                  <Typography variant="subtitle1">{res.type}</Typography>
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
