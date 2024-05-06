import { Box, Card, Grid, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "tss-react/mui";
import Amiibo from "../asset/amiibo.png";
import CryptownImg1 from "../asset/cryptownImg1.png";
import KingKongFood from "../asset/kingkongfood.png";
import Yummly from "../asset/mobDev.png";
import MoneyMatch from "../asset/moneymatchco.png";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  wrapBox: {
    marginTop: 40,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  img: {
    width: "360px",
    height: "180px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
  wrapGridItem: {
    minHeight: 400,
  },
  desc: {},
}));

const Projects = () => {
  const { classes } = useStyles();
  const theme = useTheme();
  const project = [
    {
      img: MoneyMatch,
      website: "MoneyMatch.co",
      subtitle:
        "Contributed to the development of the web and mobile-optimized pages for moneymatch.co using Next.js and Strapi CMS. Played a key role in crafting the solution from its inception, ensuring thorough attention to SEO optimizations.",
      repo: "https://moneymatch.co/",
      period: "August 2022",
    },
    {
      img: CryptownImg1,
      website: "Cryptown Web Application",
      subtitle:
        "Spearheaded front-end development for an innovative cryptocurrency education platform. Orchestrated seamless integration with backend APIs for optimal user experience. We won second place.",
      repo: "https://github.com/umairatl/cryptown-web",
      period: "Nov 2022 – Dec 2022",
    },
    {
      img: Amiibo,
      website: "Amiibo Series Web Application",
      subtitle:
        "Led the creation of an informative website showcasing amiibo characters, integrating user-friendly search capabilities",
      repo: "https://team3b-fe-hackathon1-1ihi05joa-akmal21hakim.vercel.app/",
      period: "July 2022",
    },
    {
      img: Yummly,
      website: "Food Recipe App (Mobile Hackathon)",
      subtitle:
        "Led both mobile and front-end development for a user-friendly recipe app, seamlessly integrated with Yummly Rapid API for enhanced recipe exploration.",
      repo: "https://github.com/umairatl/MobDevProject_GroupE",
      period: "August 2022",
    },
    {
      img: KingKongFood,
      website: "KingKongFood Web App (FYP)",
      subtitle:
        "Led both mobile and front-end development for a user-friendly recipe app, seamlessly integrated with Yummly Rapid API for enhanced recipe exploration.",
      repo: "https://drive.google.com/file/d/1Rxe2N-oE_xOPViz8wvLT6Zi776BxS7rn/view?usp=sharing",
      period: "August 2022",
    },
  ];

  return (
    <Box className={classes.wrapBox}>
      <ContentSize>
        <Typography variant="h5" textAlign="center" padding={5}>
          Projects & Hackathons
        </Typography>
        <Grid container justifyContent="space-evenly" rowGap={5}>
          {project.map((res, index) => (
            <Grid
              item
              xs={12}
              sm={5.5}
              lg={3.5}
              key={index}
              className={classes.wrapGridItem}
            >
              <Card>
                <img src={res?.img} className={classes.img} />
                <Stack direction="column" padding={2} height="200px">
                  <Link href={res.repo} target="_blank">
                    <Typography variant="subtitle1">{res.website}</Typography>
                  </Link>
                  <Typography variant="subtitle2" className={classes.desc}>
                    {res.subtitle}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ContentSize>
    </Box>
  );
};

export default Projects;
