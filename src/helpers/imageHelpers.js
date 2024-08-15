const BASE_URL = 'https://starwars-visualguide.com/assets/img';


export const getPilotImageUrl = (id) => {
  return `${BASE_URL}/characters/${id}.jpg`;
};


export const getStarshipImageUrl = (id) => {
  return `${BASE_URL}/starships/${id}.jpg`;
};
