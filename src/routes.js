import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TelaInicial from './pages/TelaInicial';
import Home from './pages/Home';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                   exact component={TelaInicial}
                />
                <Route
                    path="/Home"
                    component={Home}
                />
            </Switch>
        </BrowserRouter>
    )
}