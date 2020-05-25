import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import Layout from '../Layout';
import Navigation from '../Navigation/Navigation';
import Form from '../UI/Form';
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import ReactDatePicker from 'react-datepicker';

const Deploy = () => {
  const [orderForm, setOrderForm] = useState({ date: new Date()});

  const orderStatus = ['Processing', 'Quality Check', 'Ready'];
  const employeeNames = ['Marcus', 'Joe', 'Jack'];

  // Handle onChange events for input elements.
  const inputChangedHandler = (e) => {
    setOrderForm({
      ...orderForm,
      orderNumber: e.target.value,
    });
  };

  // Handle onChange events for select elements.
  const selectChangedHandler = (selectedOption, name) => {
    console.log(name);
    if (name === 'orderStatus') {
      setOrderForm({
        ...orderForm,
        orderStatus: selectedOption.target.value,
      });
    } else {
      setOrderForm({
        ...orderForm,
        author: selectedOption.target.value,
      });
    }
  };

  return (
    <Layout>
      <Navigation />
      <Form>
        <h1 className="text-2xl font-semibold">Deploy an order</h1>
        <p className="text-primaryText mb-6">Prepare your order for tracking</p>
        <label className="font-semibold">
          Order Number
          <Input
            placeholder="Order Number"
            changed={(event) => inputChangedHandler(event)}
          />
        </label>
        <label className="font-semibold mt-4">
          Current Status
          <div>
            <Select
              options={orderStatus}
              changed={(option) => selectChangedHandler(option, 'orderStatus')}
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
              onChange={(date) => setOrderForm({ ...orderForm, date: date })}
            />
          </div>
        </label>
        <label className="font-semibold mt-4 mb-10">
          Author
          <div>
            <Select
              options={employeeNames}
              changed={(option) => selectChangedHandler(option, 'author')}
            />
          </div>
        </label>
        <Button>Track</Button>
      </Form>
    </Layout>
  );
};

export default Deploy;
