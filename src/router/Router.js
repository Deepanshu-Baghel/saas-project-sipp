import React, { Component } from 'react';
import { HashRouter as RouteIt, Switch, Route } from 'react-router-dom';
import Home from '../screens/home/Home';
import Layout from '../layout/Layout';
import Login from '../screens/Login';
import Register from '../screens/Register';

class Router extends Component {
    state = {
        loggedIn: false
    };

    handleLogin = () => {
        this.setState({ loggedIn: true });
    };

    render() {
        const { loggedIn } = this.state;

        if (!loggedIn) {
            return (
                <RouteIt>
                    <Switch>
                        <Route exact path="/register" component={Register} />
                        <Route path="/" render={(props) => <Login {...props} onLogin={this.handleLogin} />} />
                    </Switch>
                </RouteIt>
            );
        }

        return (
            <RouteIt>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/student" component={Layout} />
                </Switch>
            </RouteIt>
        );
    }
}

export default Router;
