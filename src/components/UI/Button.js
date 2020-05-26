import React from 'react';

const Button = (props) => {
    const VARIANTS = {
        primary: 'bg-primaryButton text-white text-center rounded-md p-1 px-4',
        default: 'bg-primary text-white text-center rounded-md p-2'
    }

    return (
    <button className={props.defaultStyle ? VARIANTS.default : VARIANTS.primary}>{props.children}</button>
    );
}

export default Button;