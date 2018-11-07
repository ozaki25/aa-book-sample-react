import React from 'react';

const personList = [
  {
    id: 1,
    name: 'ozaki',
    age: '28',
    gender: '男性',
  },
];

class App extends React.Component {
  componentDidMount() {
    console.log('hello');
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-id">
            ID
            <input id="input-id" readOnly />
          </label>
          <label htmlFor="input-name">
            名前
            <input id="input-name" />
          </label>
          <label htmlFor="input-age">
            年齢
            <input id="input-age" type="number" />
          </label>
          <label htmlFor="input-gender">
            性別
            <select id="input-gender">
              <option value="" />
              <option value="0">男性</option>
              <option value="1">女性</option>
            </select>
          </label>
          <button id="button-register" type="button">
            登録
          </button>
        </form>
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
      </div>
    );
  }
}

export default App;
