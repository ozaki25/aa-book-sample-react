import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.editingPerson };
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
    const { onClickRegister, editingPerson } = this.props;
    const { id, name, age, gender } = this.state;
    onClickRegister({ id, name, age, gender });
    this.setState({ ...editingPerson });
  };

  render() {
    const { id, name, age, gender } = this.state;
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="input-id" className="label-control">
            ID
          </label>
          <input
            id="input-id"
            className="form-control"
            value={id}
            readOnly
            ref={this.inputId}
            onChange={e => this.setState({ id: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-name" className="label-control">
            名前
          </label>
          <input
            id="input-name"
            className="form-control"
            value={name}
            ref={this.inputName}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-age" className="label-control">
            年齢
          </label>
          <input
            id="input-age"
            className="form-control"
            type="number"
            value={age}
            ref={this.inputAge}
            onChange={e => this.setState({ age: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-gender" className="label-control">
            性別
          </label>
          <select
            id="input-gender"
            className="form-control"
            value={gender}
            ref={this.inputGender}
            onChange={e => this.setState({ gender: e.target.value })}
          >
            <option value="" />
            <option value="男性">男性</option>
            <option value="女性">女性</option>
          </select>
        </div>
        <button
          id="button-register"
          type="button"
          className="btn btn-default"
          onClick={this.onClick}
        >
          登録
        </button>
      </form>
    );
  }
}

export default Form;
