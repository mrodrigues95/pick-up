import React, { useState, useEffect, useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import firebase from '../../../firebase';

import NextDay from './NextPreviousButton/NextDay';
import PreviousDay from './NextPreviousButton/PreviousDay';
import OrderTable from './OrderTable';
import { AuthContext } from './../../Auth/Auth';
import Input from './../../UI/Input';

const OrderListItems = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useContext(AuthContext);

  // Fetch all orders for the user.
  // TODO: Support error checking. What happens if no orders
  // are fetched or there's a network error?
  useEffect(() => {
    let isMounted = false;
    const fetchOrders = async () => {
      const db = firebase.firestore();
      const data = await db
        .collection(`users/${currentUser.email}/orders`)
        .get();
      if (!isMounted) {
        setOrders(data.docs.map((doc) => doc.data()));
        setLoading(false);
      }
    };
    fetchOrders();
    return () => {
      isMounted = true;
    };
  }, [currentUser, loading]);

  // TODO: This should only display the orders for the current date that is selected.
  // Right now, it is displaying ALL orders linked to the current users account via Firebase.
  return (
    <>
      {loading ? (
        <div className="text-center m-4">
          <ClipLoader color={'#083D77'} />
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <Input
              className="max-w-md text-left"
              name="filter"
              placeholder="Filter"
            />{' '}
            <button className="ml-4" onClick={() => setLoading(true)}>
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </button>
          </div>
          <OrderTable orders={orders} />
          <div className="flex justify-between mt-10">
            <PreviousDay />
            <NextDay />
          </div>
        </>
      )}
    </>
  );
};

export default OrderListItems;
