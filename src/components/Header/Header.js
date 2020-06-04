import React from 'react';

import Logo from './HeaderItem/Logo';
import Dropdown from '../UI/Dropdown';

const Header = () => {
  return (
    <header>
      <nav className="sm:hidden bg-primary">
        <div className="flex justify-between items-center p-3">
          <Logo className="h-6 w-auto" />
          <Dropdown />
        </div>
      </nav>
      <nav className="hidden sm:block bg-primary">
        <div className="flex items-center p-3">
          <Logo />
          <h1 className="pl-2 mb-2 text-white text-2xl">pick.up</h1>
          <div className="flex items-center ml-auto">
            <Dropdown />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
