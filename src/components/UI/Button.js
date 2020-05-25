import React from 'react';

const Button = (props) => {
    return (
    <button className="bg-primary text-white rounded-md">{props.children}</button>
    );
}

export default Button;