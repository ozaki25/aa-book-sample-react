import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { personList, onClickDelete } = this.props;
    return (
      <table border="1">
        <tbody>
          {personList.map(person => (
            <TableRow key={person.id} person={person} onClickDelete={onClickDelete} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
