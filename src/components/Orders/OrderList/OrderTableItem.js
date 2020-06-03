import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import moment from 'moment';

import Modal from './../../UI/Modal';
import Select from './../../UI/Select';
import Button from './../../UI/Button';
import firebase from './../../../firebase';
import { AuthContext } from '../../Auth/Auth';
import {
  renderOrderIsReadySVG,
  renderOrderIsProcessingSVG,
  renderOrderIsInQualityCheckSVG,
} from '../../../utils/renderOrderStatusSVG';

const OrderTableItem = ({ history, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState('');
  const [newOrderStatus, setNewOrderStatus] = useState('');
  const currentStatus = ['Processing', 'Quality Check', 'Ready'];

  // Returns HH/MM.
  const convertFirestoreTimestampToDateObj = (timestamp) => {
    const date = timestamp.toDate();
    return moment(date, 'DD/MM/YYYY', true).format('LT');
  };

  const { currentUser } = useContext(AuthContext);

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

  const onUpdateOrder = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.email}/orders`)
      .doc(`${selectedOrder.orderNumber}`)
      .update({ status: newOrderStatus })
      .then(() => setShowModal(false))
      .catch((err) => console.log(err));
  };

  // Handle onClick events for every table row.
  const tableOnClickHandler = (order) => {
    setShowModal(true);
    setSelectedOrder(order);
    setNewOrderStatus(order.status);
  };

  // Handle onChange events for select elements.
  const selectChangedHandler = (option) => {
    setNewOrderStatus(option.target.value);
  };

  return props.isMobile ? (
    <>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <form onSubmit={onUpdateOrder}>
          <h2 className="mt-4 text-2xl font-bold">
            {selectedOrder.orderNumber}
          </h2>
          <p className="pb-2 text-primaryText">{selectedOrder.customerName}.</p>
          <h4 className="font-bold">Key</h4>
          <div className="flex items-center mb-2">
            <p className="px-2 py-1 border rounded-lg bg-gray-200 text-gray-700">
              {selectedOrder.key}
            </p>
            <CopyToClipboard text={selectedOrder.key}>
              <button
                className="px-1 ml-2 w-8 h-8 bg-blue-700 text-white rounded-md focus:outline-none"
                onClick={(e) => e.preventDefault()}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                </svg>
              </button>
            </CopyToClipboard>
          </div>
          <label className="mt-4 font-semibold">
            Status
            <Select
              name="currentStatus"
              options={currentStatus}
              value={newOrderStatus}
              changed={(option) => selectChangedHandler(option)}
            />
          </label>
          <div className="mt-10 flex justify-end space-x-2">
            <Button className="bg-gray-500" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button className="bg-primary" type="submit">
              Update
            </Button>
          </div>
        </form>
      </Modal>
      <tbody>
        {props.orders.map((order) => (
          <tr
            key={order.orderNumber}
            className="border-b-2 border-gray-200 cursor-pointer hover:bg-gray-200"
            onClick={() => tableOnClickHandler(order)}
          >
            <td className="text-left pl-6 py-2">{order.orderNumber}</td>
            <td className="pl-4 w-2">{showOrderStatusSVG(order.status)}</td>
          </tr>
        ))}
      </tbody>
    </>
  ) : (
    <>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <form onSubmit={onUpdateOrder}>
          <h2 className="mt-4 text-2xl font-bold">
            {selectedOrder.orderNumber}
          </h2>
          <p className="pb-2 text-primaryText">{selectedOrder.customerName}.</p>
          <h4 className="font-bold">Key</h4>
          <div className="flex items-center mb-2">
            <p className="px-2 py-1 border rounded-lg bg-gray-200 text-gray-700">
              {selectedOrder.key}
            </p>
            <CopyToClipboard text={selectedOrder.key}>
              <button
                className="px-1 ml-2 w-8 h-8 bg-blue-700 text-white rounded-md focus:outline-none"
                onClick={(e) => e.preventDefault()}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                </svg>
              </button>
            </CopyToClipboard>
          </div>
          <label className="mt-4 font-semibold">
            Status
            <Select
              name="currentStatus"
              options={currentStatus}
              value={newOrderStatus}
              changed={(option) => selectChangedHandler(option)}
            />
          </label>
          <div className="mt-10 flex justify-end space-x-2">
            <Button className="bg-gray-500" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button className="bg-primary" type="submit">
              Update
            </Button>
          </div>
        </form>
      </Modal>
      <tbody>
        {props.orders.map((order) => (
          <tr
            key={order.orderNumber}
            className="border-b-2 border-gray-200 cursor-pointer hover:bg-gray-200"
            onClick={() => tableOnClickHandler(order)}
          >
            <td className="text-left pl-12 py-2">{order.orderNumber}</td>
            <td>{order.customerName}</td>
            <td>{convertFirestoreTimestampToDateObj(order.date)}</td>
            <td className="pl-4 w-2">{showOrderStatusSVG(order.status)}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default OrderTableItem;
