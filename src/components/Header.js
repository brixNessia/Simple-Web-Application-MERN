import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Button
} from "@material-ui/core";

import * as authService from "modules/auth/service";

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
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);

  useEffect(() => {
    if (!auth.user && auth.isAuthenticated) {
      dispatch(authService.getUser());
    }
  }, [dispatch, auth.user]);

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
