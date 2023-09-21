import axios from 'axios';

axios.defaults.baseURL = 'https://64661aec9c09d77a62fd188a.mockapi.io/contacts';

export async function getContacts() {
  const { data } = await axios.get('/');
  return data;
}

export async function addContacts({ name, phone }) {
  const response =await axios.post(`/`, { name, phone });
  return response.data;
}

export async function deleteContacts(id) {
  const {data} = await axios.delete(`/${id}`);
  return data;
}

