import React from "react";
import { Switch, Route } from "react-router-dom";

// Import pages
import Home from "../../pages/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default App;
