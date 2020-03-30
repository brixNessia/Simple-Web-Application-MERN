import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Header({ children }) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              HAKDOG
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
}
export default Header;
