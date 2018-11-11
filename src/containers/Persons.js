import { connect } from 'react-redux';
import Persons from '../components/persons';
import { getAll, post, put, destroy } from '../modules/persons';

const mapStateToProps = ({ persons }) => persons;

const mapDispatchToProps = dispatch => ({
  getPersons: () => dispatch(getAll()),
  postPerson: person => dispatch(post(person)),
  putPerson: (id, person) => dispatch(put(id, person)),
  deletePerson: id => dispatch(destroy(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
