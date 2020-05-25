import React from 'react';

const ListHeader = (props) => {
  return (
    <h3 className="text-lg text-primaryText font-medium mx-2">{props.children}</h3>
  );
};

export default ListHeader;
