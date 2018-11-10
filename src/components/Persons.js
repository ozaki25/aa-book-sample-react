import React from 'react';
import Form from './Form';
import Table from './Table';
import Url from '../constants/url';

class Persons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personList: [] };
  }

  componentDidMount() {
    this.fetchPersons();
  }

  onClickRegister = async (person) => {
    try {
      const res = await fetch(Url.persons, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(person),
      });
      if (res.ok) this.fetchPersons();
      else console.error(res);
    } catch (e) {
      console.error(e);
    }
  };

  async fetchPersons() {
    const res = await fetch(Url.persons);
    const personList = await res.json();
    this.setState({ personList });
  }

  render() {
    const { personList } = this.state;
    console.log(personList);
    return (
      <div>
        <Form onClickRegister={this.onClickRegister} />
        <Table personList={personList} />
      </div>
    );
  }
}

export default Persons;
