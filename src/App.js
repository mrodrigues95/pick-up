import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/main.css';

import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Deploy from './components/Deploy/Deploy';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/Auth/PrivateRoute';
import FourOhFour from './components/404/FourOhFour';
import { AuthProvider } from './components/Auth/Auth';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/orders" component={Orders} />
          <PrivateRoute exact path="/deploy" component={Deploy} />
          <Route path="*" component={FourOhFour} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
