import React from 'react';

const Button = ({ onClick, children }) => (
  <button className="btn btn-xs btn-default" type="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
