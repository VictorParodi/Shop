import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import App from './../App';
import ShopPage from './../components/ShopComponent';

function AppRouter() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" component={App} exact />
            <Route path="/shop" component={ShopPage} exact />
         </Switch>
      </BrowserRouter>
   );
}

export default AppRouter;