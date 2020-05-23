import React from 'react';

import Header from './Header/Header';

const Layout = (props) => {
  return (
    <div className="w-screen h-screen bg-gray-200">
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
