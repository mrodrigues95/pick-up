import React, { useState, useContext } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import Layout from '../Layout';
import Navigation from '../Navigation/Navigation';
import Form from '../UI/Form';
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import ReactDatePicker from 'react-datepicker';
import firebase from '../../firebase';
import { AuthContext } from './../Auth/Auth';

const Deploy = ({ history }) => {
  const [orderForm, setOrderForm] = useState({
    currentStatus: 'Processing',
    date: new Date(),
    author: 'Marcus',
  });

  const currentStatus = ['Processing', 'Quality Check', 'Ready'];
  const employeeNames = ['Marcus', 'Joe', 'Jack'];

  const { currentUser } = useContext(AuthContext);

  const onDeployOrder = (event) => {
    event.preventDefault();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.email}/orders`)
      .add({
        orderNumber: orderForm.orderNumber,
        customerName: orderForm.customerName,
        status: orderForm.currentStatus,
        date: orderForm.date,
        author: orderForm.author,
      })
      .then(history.push('/orders'))
      .catch((error) => console.log(error));
  };

  // Handle onChange events for input elements.
  const inputChangedHandler = (e, inputName) => {
    if (inputName === 'orderNumber') {
      setOrderForm({
        ...orderForm,
        orderNumber: e.target.value,
      });
    } else if (inputName === 'customerName') {
      setOrderForm({
        ...orderForm,
        customerName: e.target.value,
      });
    }
  };

  // Handle onChange events for select elements.
  const selectChangedHandler = (selectedOption, selectName) => {
    if (selectName === 'currentStatus') {
      setOrderForm({
        ...orderForm,
        currentStatus: selectedOption.target.value,
      });
    } else {
      setOrderForm({
        ...orderForm,
        author: selectedOption.target.value,
      });
    }
  };

  // TODO: Add validation.
  return (
    <Layout isAuthenticated={true}>
      <Navigation />
      <Form onSubmit={onDeployOrder}>
        <h1 className="text-2xl font-semibold">Deploy an order</h1>
        <p className="text-primaryText mb-6">Prepare your order for tracking</p>
        <label className="font-semibold">
          Order Number
          <Input
            placeholder="Order Number"
            value={orderForm.orderNumber ?? ''}
            changed={(event) => inputChangedHandler(event, 'orderNumber')}
          />
        </label>
        <label className="font-semibold mt-4">
          Customer Name
          <Input
            placeholder="Customer Name"
            value={orderForm.customerName ?? ''}
            changed={(event) => inputChangedHandler(event, 'customerName')}
          />
        </label>
        <label className="font-semibold mt-4">
          Current Status
          <div>
            <Select
              options={currentStatus}
              value={orderForm.currentStatus}
              changed={(option) =>
                selectChangedHandler(option, 'currentStatus')
              }
            />
          </div>
        </label>
        <label className="font-semibold mt-4">
          Date
          <div>
            <ReactDatePicker
              className="w-full border rounded-md p-1"
              showPopperArrow={false}
              selected={orderForm.date}
              value={orderForm.date}
              onChange={(date) => setOrderForm({ ...orderForm, date: date })}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
        </label>
        <label className="font-semibold mt-4 mb-10">
          Author
          <div>
            <Select
              options={employeeNames}
              value={orderForm.author}
              changed={(option) => selectChangedHandler(option, 'author')}
            />
          </div>
        </label>
        <Button defaultStyle={true}>Track</Button>
      </Form>
    </Layout>
  );
};

export default Deploy;
