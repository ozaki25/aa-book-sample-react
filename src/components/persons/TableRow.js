import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const TableRow = ({ person, onClickEdit, onClickDelete }) => (
  <tr>
    <td>{person.id}</td>
    <td>{person.name}</td>
    <td>{person.age}</td>
    <td>{person.gender}</td>
    <td>
      <EditButton onClick={() => onClickEdit(person)} />
    </td>
    <td>
      <DeleteButton onClick={() => onClickDelete(person.id)} />
    </td>
  </tr>
);

export default TableRow;
