import { connect } from 'react-redux';
import Persons from '../components/persons';
import { getAll } from '../modules/persons';

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  getPersons: () => dispatch(getAll()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
