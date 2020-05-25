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
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Layout>
      <Navigation />
      <Form>
        <h1 className="text-2xl font-semibold">Deploy an order</h1>
        <p className="text-primaryText mb-6">
          Order tracking
        </p>
        <label className="font-semibold">
          Order Number
          <Input placeholder="Order Number" />
        </label>
        <label className="font-semibold mt-2">
          Current Status
          <div>
            <Select />
          </div>
        </label>
        <label className="font-semibold mt-2">
          Date
          <div>
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
        </label>
        <label className="font-semibold mt-2 mb-10">
          Author
          <div>
            <Select />
          </div>
        </label>
        <Button>Track</Button>
      </Form>
    </Layout>
  );
};

export default Deploy;
