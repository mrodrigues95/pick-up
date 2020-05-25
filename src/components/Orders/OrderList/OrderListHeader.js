import React from 'react';

const ListHeader = (props) => {
  const className = props.className
    ? 'text-lg text-primaryText font-medium mx-2 ' + props.className
    : 'text-lg text-primaryText font-medium mx-2';

  return <h3 className={className}>{props.children}</h3>;
};

export default ListHeader;
