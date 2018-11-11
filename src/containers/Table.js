import { connect } from 'react-redux';
import Table from '../components/persons/Table';
import { edit, destroy } from '../modules/persons';

const mapStateToProps = ({ persons }) => persons;

const mapDispatchToProps = dispatch => ({
  onClickEdit: person => dispatch(edit(person)),
  onClickDelete: id => dispatch(destroy(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
