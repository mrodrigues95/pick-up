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
    <div className="relative my-4 mx-0 h-8 w-64 bg-gray-300 border rounded-sm">
      <div
        className={clsx(
          'h-full flex items-center justify-center border rounded-sm bg-primary text-white shadow-md',
          progressVisual
        )}
      >
        {statusPercent}
      </div>
    </div>
  );
};

export default Progress;
