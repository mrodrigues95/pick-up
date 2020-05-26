import React from 'react';

import Header from './Header/Header';
import SignedOutHeader from './Header/SignedOutHeader';

const Layout = (props) => {
  let header = (
    <div className="w-screen h-screen bg-body">
      <Header />
      <main>{props.children}</main>
    </div>
  );
  
  // Show the SignedOutHeader if the user is not logged in.
  if (!props.isAuthenticated) {
    header = (
      <div className="w-screen h-screen bg-primary">
        <SignedOutHeader />
        <main>{props.children}</main>
      </div>
    );
  }

  return <>{header}</>;
};

export default Layout;
