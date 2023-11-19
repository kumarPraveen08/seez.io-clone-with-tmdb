const apiBaseUrl = process.env.REACT_APP_CONTENT_EMBED_BASE_URL;
const provider = process.env.REACT_APP_CONTENT_PROVIDER;
const skey = process.env.REACT_APP_CONTENT_SEASON_KEY;
const ekey = process.env.REACT_APP_CONTENT_EPISODE_KEY;

// ENPOINTS
export const movieContentEndpoint = (movieId) =>
  `${apiBaseUrl}?${provider}=${movieId}`;
export const seriesContentEndpoint = (seriesId, seasonNumber, episodeNumber) =>
  `${apiBaseUrl}?${provider}=${seriesId}&${skey}=${seasonNumber}&${ekey}=${episodeNumber}`;
