import React from 'react';

import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';

const Header = () => {
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
