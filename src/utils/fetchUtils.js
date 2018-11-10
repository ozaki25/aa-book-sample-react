import url from '../constants/url';

export const getPersons = async () => {
  try {
    const res = await fetch(url.persons);
    return res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const postPerson = async (person) => {
  try {
    const res = await fetch(url.persons, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person),
    });
    return res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const putPerson = async (id, person) => {
  try {
    const res = await fetch(`${url.persons}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person),
    });
    return res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const deletePerson = async (id) => {
  try {
    await fetch(`${url.persons}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
  }
};
