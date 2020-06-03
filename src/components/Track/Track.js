import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Layout from './../Layout';
import Card from './../UI/Card';
import InfoCard from './InfoCard';
import Button from './../UI/Button';
import Progress from './../UI/Progress';
import Modal from './../UI/Modal';

const Track = ({ history }) => {
  const [orderData, setOrderData] = useState({});
  const [invalidOrder, setInvalidOrder] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <svg
            className="mx-auto w-12 h-12"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="27.5" cy="27.5" r="26.5" fill="#C6F6D5" />
            <path
              stroke="#276749"
              strokeWidth="2"
              d="M16.707 29.293l5.657 5.657M21.315 35.272l17-16"
            />
          </svg>
          <h2 className="mt-4 text-2xl text-center font-bold">Notified</h2>
          <p className="mt-2 text-primaryText">
            The store has been notified that you are on the way!
          </p>
          <Button
            className="w-full mt-6 bg-primaryButton"
            onClick={() => setShowModal(false)}
          >
            Go back
          </Button>
        </Modal>
      )}
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
            <div className="w-full mt-6 flex justify-center">
              {orderData.status === 'Ready' ? (
                <span className="px-2 border-0 rounded-full text-green-600 bg-green-200 font-semibold">
                  {orderData.status}
                </span>
              ) : (
                <span className="px-2 border-0 rounded-full text-red-600 bg-red-200 font-semibold">
                  {orderData.status}
                </span>
              )}
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
                  <div className="flex mb-4">
                    <div className="w-1/2">
                      <span className="text-primaryButton font-bold">
                        Shawns Greenery
                      </span>
                      <div className="text-sm">
                        <p className="mt-2">123 Main Street</p>
                        <p className="mt-2">Kitchener, ON N2N N2N</p>
                        <p className="mt-2">888-888-8888</p>
                      </div>
                    </div>
                    <div className="hidden w-1/2 md:flex justify-center overflow-hidden">
                      <img
                        className="w-32 h-full bg-gray-600 rounded-full object-cover"
                        src="https://images.pexels.com/photos/5808/food-healthy-vegetables-village.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Store Logo"
                      ></img>
                    </div>
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
                    <Button
                      className="bg-yellow-500"
                      onClick={() => setShowModal(true)}
                    >
                      On the way!
                    </Button>
                    <Button
                      className="bg-green-500"
                      onClick={() => setShowModal(true)}
                    >
                      I am here!
                    </Button>
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
