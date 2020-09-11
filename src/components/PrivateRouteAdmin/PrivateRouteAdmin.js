import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import isLoggedIn from "../../utils/isLoggedIn";
import isAdministrator from "../../utils/isAdministrator";

class PrivateRouteAdmin extends Component {
  render() {
    const { exact, path, component } = this.props;

    const PrivateComponent = component;

    return (
      <Route
        exact={exact}
        path={path}
        component={(routeProps) => {
          if (isLoggedIn() && isAdministrator()) {
            return <PrivateComponent {...routeProps} />;
          }
          return <Redirect to={`/`} />;
        }}
      />
    );
  }
}

export default PrivateRouteAdmin;
