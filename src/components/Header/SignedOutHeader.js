import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from './HeaderItem/Logo';

const SignedOutHeader = () => {
  let showingHome = true;
  let currentLocation = useLocation();

  if (window.location.pathname === '/') {
    showingHome = true;
  } else {
    showingHome = false;
  }

  return (
    <header>
      <nav className="sm:hidden bg-primary">
        <div className="flex justify-between items-center p-3">
          <Logo />
          {currentLocation.pathname === '/track' ? null : (
            <NavLink
              className="bg-primaryButton text-white text-center rounded-md shadow-lg p-1 px-4 ml-auto"
              to={showingHome ? 'signin' : '/'}
            >
              {showingHome ? 'Sign In' : 'Home'}
            </NavLink>
          )}
        </div>
      </nav>
      <nav className="hidden sm:block bg-primary">
        <div className="flex items-center p-3">
          <Logo />
          <h1 className="pl-2 mb-2 text-white text-2xl">pick.up</h1>
          {currentLocation.pathname === '/track' ? null : (
            <NavLink
              className="bg-primaryButton text-white text-center rounded-md shadow-lg p-1 px-4 ml-auto"
              to={showingHome ? 'signin' : '/'}
            >
              {showingHome ? 'Sign In' : 'Home'}
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default SignedOutHeader;
