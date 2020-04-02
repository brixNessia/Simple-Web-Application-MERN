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

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
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
  const auth = useSelector(({ authentication }) => authentication);

  useEffect(() => {
    if (!auth.user && auth.isAuthenticated) {
      dispatch(authService.getUser());
    }
  }, [dispatch, auth.user]);

  return (
    <>
      <AppBar
        position="fixed"
        className={auth.isAuthenticated ? classes.appBar : classes.root}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Hakdog
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}
export default Header;
