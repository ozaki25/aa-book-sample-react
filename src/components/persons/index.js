import React from 'react';
import Form from './Form';
import Table from './Table';
import {
  getPersons, postPerson, putPerson, deletePerson,
} from '../../utils/fetchUtils';

class Persons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personList: [] };
  }

  componentDidMount() {
    this.reload();
  }

  onClickRegister = async (person) => {
    if (person.id) {
      await putPerson(person);
    } else {
      await postPerson(person);
    }
    this.reload();
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
    const { personList } = this.state;
    return (
      <div>
        <Form onClickRegister={this.onClickRegister} />
        <Table personList={personList} onClickDelete={this.onClickDelete} />
      </div>
    );
  }
}

export default Persons;
