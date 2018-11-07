import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { personList } = this.props;
    return (
      <table border="1">
        {personList.map(person => (
          <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.gender}</td>
            <td>
              <button className="edit-button" type="button">
                編集
              </button>
            </td>
            <td>
              <button className="remove-button" type="button">
                削除
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

export default Table;
