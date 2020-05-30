import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <div className="w-full bg-white border-b border-gray-400">
      <ul className="flex items-center max-w-screen-lg mx-auto">
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/deploy">Deploy</NavigationItem>
      </ul>
    </div>
  );
};

export default Navigation;
