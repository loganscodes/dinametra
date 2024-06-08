const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const BASE_URL_NASA = 'https://api.nasa.gov';
const BASE_URL_NASA_IMAGES = 'https://images-api.nasa.gov';

export const API_URL_APOD = `${BASE_URL_NASA}/planetary/apod?api_key=${API_KEY}`;
export const API_URL_NOTICES = `${BASE_URL_NASA_IMAGES}/search?q=`;
export const API_URL_PATENT = `${BASE_URL_NASA}/techtransfer/patent/?engine&api_key=${API_KEY}`;

export const getAsteroidsAPIUrl = ({ startDate, endDate }: { startDate: string; endDate: string }): string => {
  return `${BASE_URL_NASA}/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;
};
