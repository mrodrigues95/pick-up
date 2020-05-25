import React from 'react';

import HorizontalRule from './HorizontalRule';
import OrderListHeader from './OrderListHeader';
import OrderListItem from './OrderListItem';
import NextDay from './NextPreviousButton/NextDay';
import PreviousDay from './NextPreviousButton/PreviousDay';

const OrderListItems = () => {
  return (
    <div>
      <div className="flex justify-between p-2 pb-1 mt-2">
        <OrderListHeader>Order</OrderListHeader>
        <OrderListHeader className="hidden sm:block mr-0 ml-32">Customer</OrderListHeader>
        <OrderListHeader className="hidden sm:block mr-8">Time</OrderListHeader>
        <OrderListHeader>Status</OrderListHeader>
      </div>
      <div>
        <HorizontalRule />
      </div>
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
      <div className="flex justify-between mt-10">
        <PreviousDay />
        <NextDay />
      </div>
    </div>
  );
};

export default OrderListItems;
