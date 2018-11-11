import React from 'react';
import Form from './Form';
import Table from './Table';

class Persons extends React.Component {
  componentDidMount() {
    this.props.getPersons();
  }

  onClickRegister = person => {
    const { postPerson, putPerson, editedPerson } = this.props;
    if (person.id) {
      putPerson(person.id, person);
    } else {
      postPerson(person);
    }
    editedPerson();
  };

  onClickEdit = person => {
    this.props.editPerson(person);
  };

  onClickDelete = id => {
    this.props.deletePerson(id);
  };

  render() {
    const { personList, editingPerson } = this.props;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <Form editingPerson={editingPerson} onClickRegister={this.onClickRegister} />
          </div>
        </div>
        <Table
          personList={personList}
          onClickEdit={this.onClickEdit}
          onClickDelete={this.onClickDelete}
        />
      </div>
    );
  }
}

export default Persons;
