import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TelaInicial from './pages/TelaInicial';
import Home from './pages/Home';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"
                    render={(props) => <TelaInicial{...props} name="Sabanai"/>}
                />
                <Route
                 path="/Home"
                 render={(props) => <Home name="Sabanai" />}
                />
            </Switch>
        </BrowserRouter>
    )
}