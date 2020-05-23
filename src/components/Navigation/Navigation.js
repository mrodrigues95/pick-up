import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <ul className="flex border-b border-gray-400">
      <NavigationItem link="/">Orders</NavigationItem>
      <NavigationItem link="/">Deploy</NavigationItem>
    </ul>
  );
};

export default Navigation;
