import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

import isLoggedIn from "../../utils/isLoggedIn";
import isAdministrator from "../../utils/isAdministrator";

class PrivateRoute extends Component {
  state = {
    isLogin: null,
    isAdmin: null,
    loading: null,
    url: null,
  };
  async componentDidMount() {
    const isLogin = await isLoggedIn();
    const isAdmin = await isAdministrator();

    this.setState({
      isLogin,
      isAdmin,
      loading: true,
    });
  }

  render() {
    const { exact, path, component } = this.props;
    const PrivateComponent = component;

    return (
      <>
        {this.state.loading && (
          <Route
            exact={exact}
            path={path}
            component={(routeProps) => {
              if (this.state.isLogin && this.state.isAdmin) {
                return <Redirect to={this.state.url} />;
              }
              if (this.state.isLogin && !this.state.isAdmin) {
                return <PrivateComponent {...routeProps} />;
              }

              const redirectTo = window.encodeURIComponent(
                routeProps.location.pathname + routeProps.location.search
              );
              return <Redirect to={`/login/?redirectTo=${redirectTo}`} />;
            }}
          />
        )}
      </>
    );
  }
}

export default PrivateRoute;
