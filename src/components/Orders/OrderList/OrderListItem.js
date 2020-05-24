import React from 'react';

import HorizontalRule from './HorizontalRule';

const OrderListItem = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full py-2 ml-4">
        <strong className="text-sm">FA729KD9KMS92DNL21</strong>
        <svg
          className="mr-12"
          width="16"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" fill="#50ED60" />
        </svg>
      </div>
      <HorizontalRule />
    </>
  );
};

export default OrderListItem;
