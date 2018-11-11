import React from 'react';
import Form from '../../containers/Form';
import Table from '../../containers/Table';

class Persons extends React.Component {
  componentDidMount() {
    this.props.getPersons();
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <Form />
          </div>
        </div>
        <Table />
      </div>
    );
  }
}

export default Persons;
