import React from 'react';
import Form from './Form';
import Table from './Table';
import {
  getPersons, postPerson, putPerson, deletePerson,
} from '../../utils/fetchUtils';

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
      personList: [],
      editingPerson: initPerson,
    };
  }

  componentDidMount() {
    this.reload();
  }

  onClickRegister = async (person) => {
    if (person.id) {
      await putPerson(person.id, person);
    } else {
      await postPerson(person);
    }
    this.setState({ editingPerson: initPerson });
    this.reload();
  };

  onClickEdit = (person) => {
    this.setState({ editingPerson: person });
  };

  onClickDelete = async (id) => {
    await deletePerson(id);
    this.reload();
  };

  async reload() {
    const personList = await getPersons();
    this.setState({ personList });
  }

  render() {
    const { personList, editingPerson } = this.state;
    return (
      <div>
        <Form editingPerson={editingPerson} onClickRegister={this.onClickRegister} />
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
