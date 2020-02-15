import React from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Vermillion from './components/Vermillion/Vermillion';
import HighSaffron from "./components/HighSaffron/HighSaffron";
import EmeraldCity from "./components/EmeraldCity/EmeraldCity";
import EastCarmine from "./components/EastCarmine/EastCarmine";
import About from "./components/About/About";
import UserForm from "./components/User/UserForm";
// import axios from "axios";
import './App.scss';
import BookClub from './components/BookClub/BookClub';

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
                <Switch>
                    <Route path="/bookclub" component={BookClub} />
                </Switch>
                <Switch>
                    <Route path="/about" component={About} />
                </Switch>
                <Switch>
                    <Route path="/register" component={UserForm} />
                </Switch>
            </Router>
        );
    }
}

export default App;
