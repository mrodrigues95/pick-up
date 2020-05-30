import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './HeaderItem/Logo';
import HamburgerIcon from './HeaderItem/HamburgerIcon';

const Header = () => {
  // TODO: Fix the logo SVG sizing on larger screens.
  return (
    <header>
      <nav className="sm:hidden bg-primary">
        <div className="flex justify-between items-center p-3">
          <Logo />
          <HamburgerIcon />
        </div>
      </nav>
      <nav className="hidden sm:block bg-primary">
        <div className="flex items-center p-3">
          <Logo />
          <h1 className="pl-2 mb-2 text-white text-2xl">pick.up</h1>
          <Link className="flex items-center ml-auto" to="orders">
            <svg
              className="h-6 w-auto"
              viewBox="0 0 100 100"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <p className="pl-2 text-white">Shawns Greenery</p>
            <svg
              className="h-4 w-auto pl-1 mt-1"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
