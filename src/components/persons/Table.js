import React from 'react';
import TableRow from './TableRow';

const Table = ({ personList, onClickEdit, onClickDelete }) => (
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>名前</th>
        <th>年齢</th>
        <th>性別</th>
        <th />
        <th />
      </tr>
    </thead>
    <tbody>
      {personList.map(person => (
        <TableRow
          key={person.id}
          person={person}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
        />
      ))}
    </tbody>
  </table>
);

export default Table;
