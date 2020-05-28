import React, { useState, useEffect } from 'react';

import OrderTableItem from './OrderTableItem';

const OrderTable = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 640);
  };

  const isMobileOrderTable = (
    <table className="w-full mt-4">
      <thead>
        <tr className="border-b-2 border-gray-200">
          <th className="text-left">Order</th>
          <th className="text-left">Status</th>
        </tr>
      </thead>
      <OrderTableItem orders={props.orders} isMobile={isMobile} />
    </table>
  );

  const isDesktopOrderTable = (
    <table className="w-full mt-4">
      <thead>
        <tr className="border-b-2 border-gray-200">
          <th className="text-left">Order</th>
          <th className="text-left">Customer</th>
          <th className="text-left">Time</th>
          <th className="text-left">Status</th>
        </tr>
      </thead>
      <OrderTableItem orders={props.orders} isMobile={isMobile} />
    </table>
  );

  return isMobile ? isMobileOrderTable : isDesktopOrderTable;
};

export default OrderTable;
