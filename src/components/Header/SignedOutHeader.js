import React from 'react';

import Logo from './HeaderItem/Logo';

const SignedOutHeader = () => {
  return (
    <header>
      <nav className="bg-primary">
        <div className="flex justify-between items-center p-3">
          <Logo />
        </div>
      </nav>
    </header>
  );
};

export default SignedOutHeader;
