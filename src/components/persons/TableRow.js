import React from 'react';
import Button from './Button';

const TableRow = ({ person, onClickEdit, onClickDelete }) => (
  <tr>
    <td>{person.id}</td>
    <td>{person.name}</td>
    <td>{person.age}</td>
    <td>{person.gender}</td>
    <td>
      <Button onClick={() => onClickEdit(person)}>編集</Button>
    </td>
    <td>
      <Button onClick={() => onClickDelete(person.id)}>削除</Button>
    </td>
  </tr>
);

export default TableRow;
