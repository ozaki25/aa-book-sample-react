import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const TableRow = ({ person, onClickDelete }) => (
  <tr>
    <td>{person.id}</td>
    <td>{person.name}</td>
    <td>{person.age}</td>
    <td>{person.gender}</td>
    <td>
      <EditButton />
    </td>
    <td>
      <DeleteButton person={person} onClick={onClickDelete} />
    </td>
  </tr>
);

export default TableRow;
