import React from 'react';
import moment from 'moment';

import HorizontalRule from './HorizontalRule';
import {
  renderOrderIsReadySVG,
  renderOrderIsProcessingSVG,
  renderOrderIsInQualityCheckSVG,
} from '../../../utils/renderOrderStatusSVG';

const OrderListItem = (props) => {
  // Returns HH/MM.
  const convertFirestoreTimestampToDateObject = (timestamp) => {
    const date = timestamp.toDate();
    return moment(date, 'DD/MM/YYYY', true).format('LT');
  };

  let statusSVG;
  switch (props.order.status) {
    case 'Ready':
      statusSVG = renderOrderIsReadySVG();
      break;
    case 'Processing':
      statusSVG = renderOrderIsProcessingSVG();
      break;
    case 'Quality Check':
      statusSVG = renderOrderIsInQualityCheckSVG();
      break;
    default:
      break;
  }

  // TODO: Fix styling and spacing between each header item.
  return (
    <>
      <div className="flex justify-between items-center w-full py-2 ml-4">
        <strong>{props.order.orderNumber}</strong>
        <strong className="hidden sm:block">{props.order.customer}</strong>
        <strong className="hidden sm:block">
          {convertFirestoreTimestampToDateObject(props.order.time)}
        </strong>
        {statusSVG}
      </div>
      <HorizontalRule />
    </>
  );
};

export default OrderListItem;
