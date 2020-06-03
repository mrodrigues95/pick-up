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
  }, [currentUser]);

  // TODO: If the account has no orders, this should show a caption with
  // a link to the deploy component.
  // E.g. "There seems to be no orders created, would you like to deploy one now?"
  // -> then navigate to deploy.
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
          <Input
            className="max-w-md text-left"
            name="filter"
            placeholder="Filter"
          />{' '}
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
