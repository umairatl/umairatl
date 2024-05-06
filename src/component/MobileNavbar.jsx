import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  cardMenu: {
    height: "300px",
    "& .MuiPaper-root": {
      width: "100% !important",
    },
  },
  blurBackground: {
    backdropFilter: "blur(8px)",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
}));

export default function MobileNavbar() {
  const { classes } = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true); // Open the menu
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, zIndex: 999 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Menu
          className={classes.cardMenu}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{ top: "5px !important", width: "100%" }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose} // Close the menu on outside click
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Work Experience</MenuItem>
          <MenuItem onClick={handleClose}>Projects & Hackhaton</MenuItem>
          <MenuItem onClick={handleClose}>Education</MenuItem>
        </Menu>
      </Box>
      {isMenuOpen && (
        <div className={classes.blurBackground} onClick={handleClose} />
      )}
    </>
  );
}
