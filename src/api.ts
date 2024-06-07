const API_KEY = 'zQYQLVKCzaLktITM6kPXNc7H5Gr2g7ppSZEsmwQ3'


export const API_URL_APOD =  `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
export const API_URL_NOTICES = `https://images-api.nasa.gov/search?q=`
export const API_URL_PATENT = `https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`

export const getAsteroidsAPIUrl = ({ startDate, endDate }: { startDate: string; endDate: string }): string => {
    return `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;
  };