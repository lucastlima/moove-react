import axios from 'axios';

const mdbFetch = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'f8470eb01393c02fbae6d72d9e1bf2ff',
    page: 1
  }
});

export default mdbFetch;
