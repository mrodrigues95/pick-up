import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './../Layout';

const FourOhFour = () => {
  return (
    <Layout>
      <div className="mt-6 ml-6">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          Page not found.
        </h2>
        <p className="my-4 text-gray-900">
          The page you're looking for could not be found.
        </p>
        <Link to="/" className="text-blue-400">Go back home.</Link>
      </div>
    </Layout>
  );
};

export default FourOhFour;
