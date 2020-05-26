import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/main.css';

import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Deploy from './components/Deploy/Deploy';

const App = () => {
  return (
    <Switch>
      <Route path="/orders">
        <Orders />
      </Route>
      <Route path="/deploy">
        <Deploy />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
