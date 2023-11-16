import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
