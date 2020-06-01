import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './Header/Header';
import SignedOutHeader from './Header/SignedOutHeader';
import { AuthContext } from './Auth/Auth';

const Layout = (props) => {
  let currentLocation = useLocation();

  let header = (
    <div className="w-screen h-screen bg-body">
      <Header />
      <main>{props.children}</main>
    </div>
  );

  const { currentUser } = useContext(AuthContext);

  // Show the SignedOutHeader if the user is not logged in.
  if (!currentUser) {
    header = (
      <div
        className={
          currentLocation.pathname === '/track'
            ? 'w-screen h-screen bg-body'
            : 'w-screen h-screen bg-primary'
        }
      >
        <SignedOutHeader />
        <main>{props.children}</main>
      </div>
    );
  }

  return <>{header}</>;
};

export default Layout;
