import React from 'react';
import moment from 'moment';

import {
  renderOrderIsReadySVG,
  renderOrderIsProcessingSVG,
  renderOrderIsInQualityCheckSVG,
} from '../../../utils/renderOrderStatusSVG';

const OrderTableItem = (props) => {
  console.log(props.isMobile);

  // Returns HH/MM.
  const convertFirestoreTimestampToDateObj = (timestamp) => {
    const date = timestamp.toDate();
    return moment(date, 'DD/MM/YYYY', true).format('LT');
  };

  const showOrderStatusSVG = (order) => {
    switch (order) {
      case 'Ready':
        return renderOrderIsReadySVG();
      case 'Processing':
        return renderOrderIsProcessingSVG();
      case 'Quality Check':
        return renderOrderIsInQualityCheckSVG();
      default:
        return renderOrderIsProcessingSVG();
    }
  };

  return props.isMobile ? (
    <tbody>
      {props.orders.map((order) => (
        <tr key={order.orderNumber} className="border-b-2 border-gray-200">
          <td className="py-2">{order.orderNumber}</td>
          <td>{showOrderStatusSVG(order.status)}</td>
        </tr>
      ))}
    </tbody>
  ) : (
    <tbody>
      {props.orders.map((order) => (
        <tr key={order.orderNumber} className="border-b-2 border-gray-200">
          <td className="py-2">{order.orderNumber}</td>
          <td>{order.customerName}</td>
          <td>{convertFirestoreTimestampToDateObj(order.date)}</td>
          <td>{showOrderStatusSVG(order.status)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderTableItem;
