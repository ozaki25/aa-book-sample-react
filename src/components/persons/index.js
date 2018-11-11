import React from 'react';
import Form from './Form';
import Table from './Table';

const initPerson = {
  id: '',
  name: '',
  age: '',
  gender: '',
};

class Persons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingPerson: initPerson,
    };
  }

  componentDidMount() {
    this.props.getPersons();
  }

  onClickRegister = person => {
    const { postPerson, putPerson } = this.props;
    if (person.id) {
      putPerson(person.id, person);
    } else {
      postPerson(person);
    }
    this.setState({ editingPerson: initPerson });
  };

  onClickEdit = person => {
    this.setState({ editingPerson: person });
  };

  onClickDelete = id => {
    this.props.deletePerson(id);
  };

  render() {
    const { personList } = this.props;
    const { editingPerson } = this.state;
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
