import React from "react";
import { Switch, Route } from "react-router-dom";

// Import pages
import Home from "../../pages/Home";
import PriceQuotes from "../../pages/PriceQuotes";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/precios-y-cotizaciones" component={PriceQuotes} />
    </Switch>
  );
};

export default App;
