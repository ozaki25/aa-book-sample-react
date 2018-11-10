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
    this.inputId = React.createRef();
    this.inputName = React.createRef();
    this.inputAge = React.createRef();
    this.inputGender = React.createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { editingPerson } = nextProps;
    return editingPerson.id === prevState.id ? null : { ...editingPerson };
  }

  onClick = () => {
    const { onClickRegister } = this.props;
    const {
      id, name, age, gender,
    } = this.state;
    onClickRegister({
      id,
      name,
      age,
      gender,
    });
    this.setState({
      id: '',
      name: '',
      age: '',
      gender: '',
    });
  };

  render() {
    const {
      id, name, age, gender,
    } = this.state;
    return (
      <form>
        <label htmlFor="input-id">
          ID
          <input
            id="input-id"
            value={id}
            readOnly
            ref={this.inputId}
            onChange={e => this.setState({ id: e.target.value })}
          />
        </label>
        <label htmlFor="input-name">
          名前
          <input
            id="input-name"
            value={name}
            ref={this.inputName}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <label htmlFor="input-age">
          年齢
          <input
            id="input-age"
            type="number"
            value={age}
            ref={this.inputAge}
            onChange={e => this.setState({ age: e.target.value })}
          />
        </label>
        <label htmlFor="input-gender">
          性別
          <select
            id="input-gender"
            value={gender}
            ref={this.inputGender}
            onChange={e => this.setState({ gender: e.target.value })}
          >
            <option value="" />
            <option value="男性">男性</option>
            <option value="女性">女性</option>
          </select>
        </label>
        <button id="button-register" type="button" onClick={this.onClick}>
          登録
        </button>
      </form>
    );
  }
}

export default Form;
