import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Gallery from "./Component/Gallery";
import Service from "./Component/Service";
import Project from "./Component/Project";
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
          <Route path="/about" component={About} exact>
            <About />
          </Route>
          <Route path="/service" component={Service} exact>
            <Service />
          </Route>
          <Route path="/project" component={Project} exact>
            <Project />
          </Route>
          <Route path="/gallery" component={Gallery} exact>
            <Gallery />
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
