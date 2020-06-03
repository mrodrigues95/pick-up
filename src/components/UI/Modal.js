import React, { useEffect } from 'react';
import noScroll from 'no-scroll';

const Modal = (props) => {
  useEffect(() => {
    if (props.show) {
      noScroll.on();
    }

    return () => {
      noScroll.off();
    };
  }, [props.show]);

  return (
    <>
      {props.show && (
        <div
          className="z-10 fixed px-4 pb-4 inset-0 flex items-center justify-center"
          onClick={props.onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="z-20 p-4 bg-white rounded-md">{props.children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
