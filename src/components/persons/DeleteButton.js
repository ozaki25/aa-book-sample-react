import React from 'react';

const DeleteButton = ({ onClick }) => (
  <button className="btn btn-xs btn-default" type="button" onClick={onClick}>
    削除
  </button>
);

export default DeleteButton;
