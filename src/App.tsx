import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Bookshelf from "./components/Bookshelf/Bookshelf";
import HighSaffron from "./components/HighSaffron/HighSaffron";

import "./App.scss";

function App() {
  if (process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID) {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
  }

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/bookshelf" component={Bookshelf} />
        <Route path="/highsaffron" component={HighSaffron} />
      </Switch>
    </Router>
  );
}

export default App;
