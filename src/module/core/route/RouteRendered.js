import React from "react";
import { Route } from "react-router-dom";

function RouteRendered({ component: Component, ...rest }) {
  return <Route {...rest} render={props => <Component {...props} />} />;
}

export default RouteRendered;
