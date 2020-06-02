import React, { useState } from 'react';
import clsx from 'clsx';

const Progress = ({ status }) => {
  const [progressVisual, setProgressVisual] = useState('');
  const [statusPercent, setStatusPercent] = useState('');

  setTimeout(() => {
    switch (status) {
      case 'Processing':
        setProgressVisual('opacity-100 w-2/4');
        setStatusPercent('50%');
        break;
      case 'Quality Check':
        setProgressVisual('opacity-100 w-3/4');
        setStatusPercent('75%');
        break;
      case 'Ready':
        setProgressVisual('opacity-100 w-full');
        setStatusPercent('100%');
        break;
      default:
        setProgressVisual('opacity-100 w-1/4');
        setStatusPercent('25%');
        break;
    }
  }, 1000);

  return (
    <div className="w-3/4 mt-4 mb-12 mx-auto h-8 w-64 bg-gray-300 border-0 rounded-full shadow-md">
      <div
        className={clsx(
          'h-full flex items-center justify-center border rounded-full bg-gradient-white-to-blue text-white transition-all ease-in-out duration-700',
          progressVisual
        )}
      >
        {statusPercent}
      </div>
    </div>
  );
};

export default Progress;
