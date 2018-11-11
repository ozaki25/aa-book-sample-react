import { connect } from 'react-redux';
import Persons from '../components/persons';
import { getAll, post, put, destroy, edit, edited } from '../modules/persons';

const mapStateToProps = ({ persons }) => persons;

const mapDispatchToProps = dispatch => ({
  getPersons: () => dispatch(getAll()),
  postPerson: person => dispatch(post(person)),
  putPerson: (id, person) => dispatch(put(id, person)),
  deletePerson: id => dispatch(destroy(id)),
  editPerson: person => dispatch(edit(person)),
  editedPerson: person => dispatch(edited()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
