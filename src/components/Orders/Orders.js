import React from 'react';

import Layout from '../Layout';
import Navigation from '../Navigation/Navigation';
import Card from '../UI/Card';
import OrderList from './OrderList/OrderList';

const Orders = () => {
  return (
    <Layout>
      <Navigation />
      <Card>
        <h1 className="text-2xl font-semibold">Today</h1>
        <button className="mt-2">
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 70 87.5"
          >
            <path d="M50.241 14.824h4.25a2 2 0 002-2V3.49a2 2 0 00-2-2h-4.25a2 2 0 00-2 2v9.333a2 2 0 002 2zM15.5 14.824h4.25a2 2 0 002-2V3.49a2 2 0 00-2-2H15.5a2 2 0 00-2 2v9.333a2 2 0 002 2z" />
            <path d="M68 12.16c0-1.66-1.35-3-3-3h-6.51v3.66c0 2.21-1.79 4-4 4h-4.25c-2.2 0-4-1.79-4-4V9.16H23.75v3.66c0 2.21-1.8 4-4 4H15.5c-2.21 0-4-1.79-4-4V9.16H5c-1.66 0-3 1.34-3 3v10.19h66V12.16zM5 68.51h59.99c1.65 0 3-1.35 3-3V24.35H2v41.16c0 1.65 1.35 3 3 3zm44.54-38.66c0-1.11.89-2 2-2h5.54a2 2 0 012 2v5.54c0 1.1-.9 2-2 2h-5.54a2 2 0 01-2-2v-5.54zm0 12.74a2 2 0 012-2h5.54c1.1 0 2 .9 2 2v5.55c0 1.1-.9 2-2 2h-5.54a2 2 0 01-2-2v-5.55zM36.66 29.85a2 2 0 012-2h5.54c1.11 0 2 .89 2 2v5.54a2 2 0 01-2 2h-5.54c-1.1 0-2-.9-2-2v-5.54zm0 12.74c0-1.1.9-2 2-2h5.54a2 2 0 012 2v5.55a2 2 0 01-2 2h-5.54c-1.1 0-2-.9-2-2v-5.55zM23.79 29.85c0-1.11.89-2 2-2h5.54a2 2 0 012 2v5.54c0 1.1-.9 2-2 2h-5.54a2 2 0 01-2-2v-5.54zm0 12.74a2 2 0 012-2h5.54c1.1 0 2 .9 2 2v5.55c0 1.1-.9 2-2 2h-5.54a2 2 0 01-2-2v-5.55zm0 12.75a2 2 0 012-2h5.54c1.1 0 2 .9 2 2v5.54a2 2 0 01-2 2h-5.54c-1.11 0-2-.89-2-2v-5.54zM11.04 29.72c0-1.1.9-2 2-2h5.54c1.1 0 2 .9 2 2v5.54c0 1.1-.9 2-2 2h-5.54c-1.1 0-2-.9-2-2v-5.54zm-.13 12.87c0-1.1.9-2 2-2h5.54a2 2 0 012 2v5.55a2 2 0 01-2 2h-5.54c-1.1 0-2-.9-2-2v-5.55zm0 12.75c0-1.1.9-2 2-2h5.54a2 2 0 012 2v5.54c0 1.11-.89 2-2 2h-5.54a2 2 0 01-2-2v-5.54z" />
          </svg>
        </button>
      </Card>
      <Card>
        <div className="w-full">
          <OrderList />
        </div>
      </Card>
    </Layout>
  );
};

export default Orders;
