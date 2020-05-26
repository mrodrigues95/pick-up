import React from 'react';

import Logo from './HeaderItem/Logo';
import Button from '../UI/Button';

const SignedOutHeader = () => {
  return (
    <header>
      <nav className="bg-primary">
        <div className="flex justify-between items-center p-3">
          <Logo />
          <Button defaultStyle={true}>asd</Button>
        </div>
      </nav>
    </header>
  );
};

export default SignedOutHeader;
