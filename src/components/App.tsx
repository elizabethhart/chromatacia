import React from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Vermillion from './Vermillion';
import HighSaffron from "./HighSaffron";
import EmeraldCity from "./EmeraldCity";
import EastCarmine from "./EastCarmine";
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <Switch>
                    <Route path="/vermillion" component={Vermillion} />
                </Switch>
                <Switch>
                    <Route path="/highsaffron" component={HighSaffron} />
                </Switch>
                <Switch>
                    <Route path="/emeraldcity" component={EmeraldCity} />
                </Switch>
                <Switch>
                    <Route path="/eastcarmine" component={EastCarmine} />
                </Switch>
            </Router>
        );
    }
}

export default App;
