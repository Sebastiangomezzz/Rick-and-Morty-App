import axios from 'axios';

export const initUrl = 'https://rickandmortyapi.com/api/character';

export const fetchAPI = async (page = 1, filter) => {
  let url;
  if (filter) {
    url = `${initUrl}/?name=${filter}&page=${page}`;
  } else url = `${initUrl}?page=${page}`;
  const response = await axios.get(url);
  const { data } = response;
  return data;
};
