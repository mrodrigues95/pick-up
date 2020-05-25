import React from 'react';

const Button = (props) => {
    return (
    <button className="bg-primary text-white text-center rounded-md p-2">{props.children}</button>
    );
}

export default Button;