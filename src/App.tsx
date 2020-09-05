import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from "./components/About/About";

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
