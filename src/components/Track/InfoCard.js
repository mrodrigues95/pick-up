import React from 'react';
import clsx from 'clsx';

const InfoCard = (props) => {
  return (
    <div className="max-w-auto mb-4 border border-gray-100 shadow-md rounded-lg">
      <div
        className={clsx(
          'flex items-center w-full h-12 p-2 text-lg text-white border-t-0 rounded-md rounded-b-none',
          props.className
        )}
      >
        {props.title}
      </div>
      <div className="p-4 m-2 h-full font-semibold">{props.children}</div>
    </div>
  );
};

export default InfoCard;
