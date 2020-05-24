import React from 'react';

import Layout from '../Layout';
import Navigation from '../Navigation/Navigation';
import Form from '../UI/Form';

const Deploy = () => {
  return (
    <Layout>
      <Navigation />
      <Form>
        <h1 className="text-2xl font-semibold">Deploy an order</h1>
      </Form>
    </Layout>
  );
};

export default Deploy;
