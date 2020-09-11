import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import PrivateRoute from "../PrivateRoute/PrivateRoute";

// Import pages
import Home from "../../pages/Home";
import PriceQuotes from "../../pages/PriceQuotes";
import Private from "../../pages/Private";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import PriceQuotesPrivate from "../../pages/PriceQuotesPrivate";

import NoMatch from "../../pages/NoMatch"; //page 404
import isLoggedIn from "../../utils/isLoggedIn";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registro" component={Register} />
      <Route
        exact
        path="/precios-y-cotizaciones-publico"
        component={PriceQuotes}
      />

      <PrivateRoute
        exact
        path="/precios-y-cotizaciones"
        component={PriceQuotesPrivate}
      />
      <PrivateRoute exact path="/private" component={Private} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default App;
