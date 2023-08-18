const API_KEY = '3926f6098ad6fa4a720d108126a309e1'; // Remplacez par votre propre clé API TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

 export const fetchMediaByType = async (mediaType, sortBy) => {
  const response = await fetch(`${BASE_URL}/${mediaType}/${sortBy}?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

