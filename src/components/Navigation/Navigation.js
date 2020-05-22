import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <ul className="flex">
      <NavigationItem link="/">Orders</NavigationItem>
      <NavigationItem link="/">Deploy</NavigationItem>
    </ul>
  );
};

export default Navigation;
