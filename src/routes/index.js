import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from './../components/Header';
import ROUTES_CONFIG from './config';

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {
                    ROUTES_CONFIG.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    component={route.component}
                                    exact
                                />
                            )
                        }
                    )
                }
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;