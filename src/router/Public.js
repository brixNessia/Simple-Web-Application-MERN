import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Header from "components/Header";

function Public(props) {
  const { component, layout, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

  return (
    <Route
      {...rest}
      render={props => (
        <Suspense fallback={<div>Loading</div>}>
          <Header>
            <Component {...props} />
          </Header>
        </Suspense>
      )}
    />
  );
}

export default Public;
