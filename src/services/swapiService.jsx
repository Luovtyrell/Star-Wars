import axios from 'axios';

const API_URL = 'https://swapi.dev/api/starships/';

const fetchStarships = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export default fetchStarships