import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Fonds from "./components/Fonds/Fonds";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fonds">
          <Fonds />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
