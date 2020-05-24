import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <ul className="flex bg-white border-b border-gray-400">
      <NavigationItem link="/">Orders</NavigationItem>
      <NavigationItem link="/deploy">Deploy</NavigationItem>
    </ul>
  );
};

export default Navigation;
