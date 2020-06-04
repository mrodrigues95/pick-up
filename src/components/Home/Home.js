import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import Layout from './../Layout';
import Logo from './../Header/HeaderItem/Logo';
import Input from '../UI/Input';
import Button from '../UI/Button';
import firebase from '../../firebase';

const Home = ({ history }) => {
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState({});
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      setIsLoading(true);
      const db = firebase.firestore();
      const data = await db.collection('users').get();
      const companies = {};
      // Get all the companies.
      data.forEach((doc) => (companies[doc.id] = doc.data()));

      // Iterate through all of the companies that are stored in Firebase.
      // Then, retrieve all of the orders that belong to each company.
      for (const info in companies) {
        const data = await db.collection(`users/${info}/orders`).get();
        data.forEach((doc) => {
          // Return order information if the UUID matches the search query.
          if (doc.data().key === search) {
            setOrderData(doc.data());
          }
        });
      }
      setError('Unable to find order. Please double check your unique key.');
      setIsLoading(false);
    };
    if (search.length > 0) {
      fetchOrder();
    }
  }, [search]);

  useEffect(() => {
    if (Object.keys(orderData).length > 0 && !isLoading) {
      history.push(`/track/${orderId.uuid}`, { orderData });
    }
  }, [history, orderData, orderId.uuid, isLoading]);

  const onChangeHandler = (e) => {
    setOrderId({ [e.target.name]: e.target.value });
  };

  const checkForEmptyOrderNumber = () => {
    if (!orderId.uuid) {
      setError('Unable to find order. Please double check your unique key.');
    } else {
      setSearch(orderId.uuid)
    }
  }

  // TODO: Fix mobile layout.
  return (
    <Layout>
      <div className="flex flex-col w-full max-w-xl p-3 mt-40 m-auto">
        <div className="flex items-start">
          <Logo className="h-16 w-auto" />
          <h1 className="text-4xl text-white ml-4">pick.up</h1>
        </div>
        <form
          className="flex flex-col mt-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-2">
            <Input
              placeholder="Enter your unique PIN"
              name="uuid"
              changed={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="flex justify-between">
            <span className="text-primaryButton text-sm font-hairline">
              {error}
            </span>
            <div>
              {isLoading ? (
                <ClipLoader color={'white'} />
              ) : (
                <Button
                  className="bg-primaryButton"
                  onClick={checkForEmptyOrderNumber}
                >
                  View Order
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Home;
