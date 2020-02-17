import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {auth} from './../firebase/firebase.utils';
import Header from './../components/Header';
import ROUTES_CONFIG from './config';

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentUser: null};
    }
    
    unsubscribeFromAuth = null;
    
    componentDidMount() {
        this.unsubscribeFromAuth =  auth.onAuthStateChanged((user) => {
            this.setState({currentUser: user});
            console.log(user);
        });
    }
    
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    
    render() {
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
}

export default AppRouter;