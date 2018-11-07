import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      age: '',
      gender: '',
    };
  }

  render() {
    const {
      id, name, age, gender,
    } = this.state;
    return (
      <form>
        <label htmlFor="input-id">
          ID
          <input id="input-id" value={id} readOnly />
        </label>
        <label htmlFor="input-name">
          名前
          <input id="input-name" valie={name} />
        </label>
        <label htmlFor="input-age">
          年齢
          <input id="input-age" type="number" value={age} />
        </label>
        <label htmlFor="input-gender">
          性別
          <select id="input-gender" value={gender}>
            <option value="" />
            <option value="0">男性</option>
            <option value="1">女性</option>
          </select>
        </label>
        <button id="button-register" type="button">
          登録
        </button>
      </form>
    );
  }
}

export default Form;
