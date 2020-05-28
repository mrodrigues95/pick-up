import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../../firebase';

import HorizontalRule from './HorizontalRule';
import OrderListHeader from './OrderListHeader';
import OrderListItem from './OrderListItem';
import NextDay from './NextPreviousButton/NextDay';
import PreviousDay from './NextPreviousButton/PreviousDay';
import { AuthContext } from './../../Auth/Auth';

const OrderListItems = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useContext(AuthContext);

  // Fetch all orders for the user.
  // TODO: Support error checking. What happens if no orders
  // are fetched or theres a network error?
  useEffect(() => {
    const fetchOrders = async () => {
      const db = firebase.firestore();
      const data = await db
        .collection(`users/${currentUser.email}/orders`)
        .get();
      setOrders(data.docs.map((doc) => doc.data()));
      setLoading(false);
    };
    fetchOrders();
  }, [currentUser]);

  console.log('Orders:', orders);

  // TODO: Show a spinner when the orders are loading instead of text.
  // Also, the styling is off. Maybe convert this to a table or grid?
  return (
    <div>
      <div className="flex justify-between p-2 pb-1 mt-2">
        <OrderListHeader>Order</OrderListHeader>
        <OrderListHeader className="hidden sm:block mr-0 ml-32">
          Customer
        </OrderListHeader>
        <OrderListHeader className="hidden sm:block mr-8">Time</OrderListHeader>
        <OrderListHeader>Status</OrderListHeader>
      </div>
      <div>
        <HorizontalRule />
      </div>
      {loading ? (
        <>Loading...</>
      ) : (
        orders.map((order) => (
          <OrderListItem key={order.orderNumber} order={order} />
        ))
      )}
      <div className="flex justify-between mt-10">
        <PreviousDay />
        <NextDay />
      </div>
    </div>
  );
};

export default OrderListItems;
