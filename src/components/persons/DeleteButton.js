import React from 'react';

const DeleteButton = ({ onClick }) => (
  <button className="remove-button" type="button" onClick={onClick}>
    削除
  </button>
);

export default DeleteButton;
