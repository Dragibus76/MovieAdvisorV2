import config from "./config";

const apiKey = config.API_KEY;
const baseUrl = config.BASE_URL;
const lang = config.LANG;

// FETCH MEDIA TYPE
 export const fetchMediaByType = async (mediaType, sortBy, page) => {
  const response = await fetch(`${baseUrl}/${mediaType}/${sortBy}?api_key=${apiKey}&language=${lang}&page=${page}`);
  const data = await response.json();
  return data.results;
};

export const searchMedia = async (mediaType, searchTerm, page) => {
  const url = `${baseUrl}/search/${mediaType}?api_key=${apiKey}&query=${searchTerm}&include_adult=false&language=${lang}&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};