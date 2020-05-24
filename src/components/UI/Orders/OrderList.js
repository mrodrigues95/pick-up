import React from 'react';

import HorizontalRule from './HorizontalRule';
import OrderListHeader from './OrderListHeader';
import OrderListItem from './OrderListItem';

const OrderListItems = () => {
  return (
    <div>
      <div className="flex justify-between p-2 pb-1">
        <OrderListHeader>Order</OrderListHeader>
        <OrderListHeader>Status</OrderListHeader>
      </div>
      <div>
        <HorizontalRule />
      </div>
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
    </div>
  );
};

export default OrderListItems;
