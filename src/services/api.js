import axios from 'axios';

const api = axios.create({
  baseURL: 'https://funcione.herokuapp.com/api/'
});

export default api;
