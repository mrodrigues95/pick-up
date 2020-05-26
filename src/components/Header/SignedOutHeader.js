import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './HeaderItem/Logo';

const SignedOutHeader = () => {
  let navLink;

  switch (window.location.pathname) {
    case '/signin':
      navLink = (
        <NavLink
          className="bg-primaryButton text-white text-center rounded-md shadow-lg p-1 px-4"
          to="/"
        >
          Home
        </NavLink>
      );
      break;
    case '/':
      navLink = (
        <NavLink
          className="bg-primaryButton text-white text-center rounded-md shadow-lg p-1 px-4"
          to="/signin"
        >
          Sign In
        </NavLink>
      );
      break;
    default:
      break;
  }

  return (
    <header>
      <nav className="bg-primary">
        <div className="flex justify-between items-center p-3">
          <Logo />
          {navLink}
        </div>
      </nav>
    </header>
  );
};

export default SignedOutHeader;
