import React from 'react';
import { Provider } from 'react-redux';
import Persons from './containers/Persons';
import store from './modules/createStore';

const App = () => (
  <Provider store={store}>
    <Persons />
  </Provider>
);

export default App;
