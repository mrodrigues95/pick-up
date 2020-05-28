import React from 'react';

import Logo from './HeaderItem/Logo';
import HamburgerIcon from './HeaderItem/HamburgerIcon';

const Header = () => {
  // TODO: Fix the logo SVG sizing on larger screens.
  // Also, need to add 'pick.up' next to the logo and
  // replace the hamburger icon with an account bubble on
  // larger screens.
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
