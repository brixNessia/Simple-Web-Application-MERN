import React, { lazy, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, CircularProgress } from "@material-ui/core";

import Header from "components/Header";
import Main from "layouts/Main";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

function Private(props) {
  const { component, layout, auth, ...rest } = props;
  const classes = useStyles();
  const isLogin = useSelector(({ authentication }) => authentication);
  const Component = lazy(() => import(`../${component}`));

  if (!isLogin.isAuthenticated) {
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: props.location }
            }}
          />
        )}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Header>
          <Suspense
            fallback={
              <Backdrop className={classes.backdrop} open={true}>
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            <Main>
              <Component {...props} />
            </Main>
          </Suspense>
        </Header>
      )}
    />
  );
}

export default Private;
