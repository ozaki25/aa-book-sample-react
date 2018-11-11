import { getPersons, postPerson, putPerson, deletePerson } from '../../utils/fetchUtils';

// Actions
export const GET_ALL = 'PERSONS/GET_ALL';
export const POST = 'PERSONS/POST';
export const PUT = 'PERSONS/PUT';
export const DELETE = 'PERSONS/DELETE';
export const EDIT = 'PERSONS/EDIT';
export const EDITED = 'PERSONS/EDITED';

// ActionCreators
export function getAllDone(personList) {
  return { type: GET_ALL, payload: { personList } };
}

export function getAll() {
  return async dispatch => {
    const personList = await getPersons();
    return dispatch(getAllDone(personList));
  };
}

export function post(person) {
  return async dispatch => {
    await postPerson(person);
    dispatch(getAll());
  };
}

export function put(id, person) {
  return async dispatch => {
    await putPerson(id, person);
    dispatch(getAll());
  };
}

export function destroy(id) {
  return async dispatch => {
    await deletePerson(id);
    dispatch(getAll());
  };
}

export function edit(person) {
  return { type: EDIT, payload: { person } };
}

export function edited() {
  return { type: EDITED };
}

// Reducer
const initialState = {
  personList: [],
  editingPerson: {
    id: '',
    name: '',
    age: '',
    gender: '',
  },
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL:
      return { ...state, personList: payload.personList };
    case EDIT:
      return { ...state, editingPerson: payload.person };
    case EDITED:
      return { ...state, editingPerson: initialState.editingPerson };
    default:
      return state;
  }
}
