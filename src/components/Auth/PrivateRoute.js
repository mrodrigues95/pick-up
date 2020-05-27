import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from './Auth';

// Only render components that pertain to authenticated users.
// If the user is NOT authenticated, then we can use this to only show
// the home component and sign in/sign out components.
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        // If we have a user, render the route component.
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          // Otherwise, redirect to sign in.
          <Redirect to={'/'} />
        )
      }
    />
  );
};

export default PrivateRoute;
