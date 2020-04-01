import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Header from "components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

function Public(props) {
  const classes = useStyles();
  const { component, layout, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

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
            <Component {...props} />
          </Suspense>
        </Header>
      )}
    />
  );
}

export default Public;
