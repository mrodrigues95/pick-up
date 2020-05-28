import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../../firebase';

import NextDay from './NextPreviousButton/NextDay';
import PreviousDay from './NextPreviousButton/PreviousDay';
import OrderTable from './OrderTable';
import { AuthContext } from './../../Auth/Auth';

const OrderListItems = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useContext(AuthContext);

  // Fetch all orders for the user.
  // TODO: Support error checking. What happens if no orders
  // are fetched or there's a network error?
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

  // TODO: Show a spinner when the orders are loading instead of text.
  return (
    <>
      {loading ? <>Loading...</> : <OrderTable orders={orders} />}
      <div className="flex justify-between mt-10">
        <PreviousDay />
        <NextDay />
      </div>
    </>
  );
};

export default OrderListItems;
