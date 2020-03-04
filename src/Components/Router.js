import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Main from "Routes/Main";
import Summoner from "Routes/Summoner"
import Header from "Components/Header";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/summoner" component={Summoner} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)