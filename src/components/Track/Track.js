import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Layout from './../Layout';
import Card from './../UI/Card';
import InfoCard from './InfoCard';
import Button from './../UI/Button';
import Progress from './../UI/Progress';

const Track = ({ history }) => {
  const [orderData, setOrderData] = useState({});
  const [invalidOrder, setInvalidOrder] = useState(false);

  useEffect(() => {
    // Double layer of security just to check if the order
    // is invalid or if the user tampered with the URL.
    if (!!history.location.state) {
      setOrderData({
        orderNumber: history.location.state.orderData.orderNumber,
        status: history.location.state.orderData.status,
        author: history.location.state.orderData.author,
      });
    } else {
      setInvalidOrder(true);
    }
  }, [history.location.state]);

  console.log(orderData)

  return (
    <Layout>
      {invalidOrder && <Redirect to="/" />}
      <div className="mt-8">
        <Card>
          <div className="flex flex-col w-full">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
                Hang tight! Your order is being prepared.
              </h2>
              <p className="text-primaryText mt-2">
                {orderData.author} is processing your order.
              </p>
            </div>
            <Progress status={orderData.status} />
            <div className="flex-1 mx-auto sm:flex">
              <div className="flex-auto">
                <InfoCard
                  className="bg-primary"
                  title="Thank you for your order"
                >
                  <span className="text-primaryButton font-bold">
                    Order #{orderData.orderNumber}{' '}
                  </span>
                  <span className="text-primary font-semibold">
                    was successfully placed.
                  </span>
                  <div className="text-sm">
                    <p></p>
                    <p className="mt-2">
                      You can track the status of your order above.
                    </p>
                    <p className="mt-2">
                      If you have any questions or concerns about your order,
                      please contact the store immediately.
                    </p>
                  </div>
                </InfoCard>
                <InfoCard
                  className="bg-primary"
                  title="Store Details"
                  showAvatar={true}
                >
                  <span className="text-primaryButton font-bold">
                    Sheridan Greenery
                  </span>
                  <div className="text-sm">
                    <p className="mt-2">123 Main Street</p>
                    <p className="mt-2">Kitchener, ON N2N N2N</p>
                    <p className="mt-2">888-888-8888</p>
                  </div>
                </InfoCard>
              </div>
              <div className="flex sm:ml-4">
                <InfoCard
                  className="bg-primaryButton"
                  title="When You Are Ready"
                >
                  <p className="text-sm">
                    Once your order is completed, let the store know about your
                    whereabouts.
                  </p>
                  <div className="flex flex-col mt-4 space-y-2 md:flex-row md:space-y-0 md:justify-evenly">
                    <Button className="bg-yellow-500">On the way!</Button>
                    <Button className="bg-green-500">I am here!</Button>
                  </div>
                </InfoCard>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Track;
