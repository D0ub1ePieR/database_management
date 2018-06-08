import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { IndexPage } from "./page";

export class MainRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={'/'} component={IndexPage}/>
                </Switch>
            </HashRouter>
        );
    }
}