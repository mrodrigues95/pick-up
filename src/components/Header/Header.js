import React from 'react';

import Logo from './HeaderItem/Logo';
import HamburgerIcon from './HeaderItem/HamburgerIcon';

const Header = () => {
  // TODO: Fix the logo SVG sizing on larger screens and
  // add a 'pick.up' header next to the logo.
  return (
    <header>
      <nav className="bg-primary">
        <div className="flex justify-between items-center p-3">
          <Logo />
          <HamburgerIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
