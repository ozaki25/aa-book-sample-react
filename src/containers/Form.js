import { connect } from 'react-redux';
import Form from '../components/persons/Form';
import { post, put, edited } from '../modules/persons';

const mapStateToProps = ({ persons }) => persons;

const mapDispatchToProps = dispatch => ({
  onClickRegister: person => {
    if (person.id) {
      dispatch(put(person.id, person));
    } else {
      dispatch(post(person));
    }
    dispatch(edited());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
