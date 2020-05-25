import React from 'react';

const Select = () => {
  return (
    <select className="w-full border rounded-md p-1">
      <option value="processing">Processing</option>
      <option value="qc">Quality Check</option>
      <option value="ready">Ready</option>
    </select>
  );
};

export default Select;
