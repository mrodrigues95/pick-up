import React from 'react';

export const renderOrderIsReadySVG = () => {
  return (
    <>
      <svg
        className="mr-12"
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill="#50ED60" />
      </svg>
    </>
  );
};

export const renderOrderIsProcessingSVG = () => {
  return (
    <>
      <svg
        className="mr-12"
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill="#F4D35E" />
      </svg>
    </>
  );
};

export const renderOrderIsInQualityCheckSVG = () => {
  return (
    <>
      <svg
        className="mr-12"
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill="#DA4167" />
      </svg>
    </>
  );
};
