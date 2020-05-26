import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/main.css';

import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Deploy from './components/Deploy/Deploy';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const App = () => {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/orders" component={Orders} />
      <Route path="/deploy" component={Deploy} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
