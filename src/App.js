import React from 'react';
import Form from './components/Form';
import Table from './components/Table';

const defaultPersonList = [
  {
    id: 1,
    name: 'ozaki',
    age: '28',
    gender: '男性',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personList: defaultPersonList };
  }

  onClickRegister = (person) => {
    this.setState((prevState) => {
      // [TODO]tmp logic
      person.id = prevState.personList.length + 1;
      return {
        personList: [...prevState.personList, person],
      };
    });
  };

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

export default App;
