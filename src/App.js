import React from 'react';
import Form from './components/Form';
import Table from './components/Table';

const personList = [
  {
    id: 1,
    name: 'ozaki',
    age: '28',
    gender: '男性',
  },
];

function App() {
  return (
    <div>
      <Form />
      <Table personList={personList} />
    </div>
  );
}

export default App;
