import React, { lazy, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "components/Header";
import Main from "layouts/Main";

function Private(props) {
  const { component, layout, auth, ...rest } = props;
  const isLogin = useSelector(({ auth }) => auth);
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
        <Suspense fallback={<div>Loading</div>}>
          <Header>
            <Main>
              <Component {...props} />
            </Main>
          </Header>
        </Suspense>
      )}
    />
  );
}

export default Private;
