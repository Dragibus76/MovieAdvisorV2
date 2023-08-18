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

// FETCH MEDIA SEARCH
export const searchMedia = async (mediaType, searchTerm, page) => {
  const url = `${baseUrl}/search/${mediaType}?api_key=${apiKey}&query=${searchTerm}&include_adult=false&language=${lang}&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

// FETCH MEDIA DETAILS 
export const fetchMediaDetails = async (mediaType, mediaId) => {
  const url = `${baseUrl}/${mediaType}/${mediaId}?api_key=${apiKey}&append_to_response=videos&language=${lang}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// FETCH MEDIA CREDITS
export const fetchMediaCredits = async (mediaType, mediaId) => {
  try {
    const response = await fetch(
      `${baseUrl}/${mediaType}/${mediaId}/credits?api_key=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching media credits");
  }
};