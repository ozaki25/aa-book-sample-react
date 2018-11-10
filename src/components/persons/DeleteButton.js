import React from 'react';

const DeleteButton = ({ person, onClick }) => (
  <button className="remove-button" type="button" onClick={() => onClick(person.id)}>
    削除
  </button>
);

export default DeleteButton;
