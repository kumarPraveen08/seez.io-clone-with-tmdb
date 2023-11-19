import axios from "axios";

// base urls
const apiBaseUrl = `https://api.themoviedb.org/3`;
const imageBaseUrl = `https://image.tmdb.org/t/p`;
const token = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
// const api_key = process.env.REACT_APP_TMDB_API_KEY;

// ENDPOINTS
const popularMoviesEndpoint = `https://api.themoviedb.org/3/movie/popular`;
const topRatedMoviesEndpoint = `https://api.themoviedb.org/3/movie/top_rated`;
const upcomingMoviesEndpoint = `https://api.themoviedb.org/3/movie/upcoming`;
const nowPlayingMoviesEndpoint = `https://api.themoviedb.org/3/movie/now_playing`;
const popularSeriesEndpoint = `https://api.themoviedb.org/3/tv/popular`;
const topRatedSeriesEndpoint = `https://api.themoviedb.org/3/tv/top_rated`;
const airingTodaySeriesEndpoint = `https://api.themoviedb.org/3/tv/airing_today`;

// DYNAMIC ENPOINTS
const movieDetailsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}?append_to_response=videos`;
const seriesDetailsEndpoint = (id) =>
  `${apiBaseUrl}/tv/${id}?append_to_response=videos`;
const genreMoviesEndpoint = (genreId) =>
  `${apiBaseUrl}/discover/movie?with_genres=${genreId}`;
const yearMoviesEndpoint = (year) =>
  `${apiBaseUrl}/discover/movie?primary_release_year=${year}`;
const genreSeriesEndpoint = (genreId) =>
  `${apiBaseUrl}/discover/tv?with_genres=${genreId}`;
const yearSeriesEndpoint = (year) =>
  `${apiBaseUrl}/discover/tv?first_air_date_year=${year}`;
const movieCreditsEndpoint = (movieId) =>
  `${apiBaseUrl}/movie/${movieId}/credits`;
const seriesCreditsEndpoint = (seriesId) =>
  `${apiBaseUrl}/tv/${seriesId}/credits`;
const similarMoviesEndpoint = (movieId) =>
  `${apiBaseUrl}/movie/${movieId}/similar`;
const similarSeriesEndpoint = (seriesId) =>
  `${apiBaseUrl}/tv/${seriesId}/similar`;
const personDetailsEndpoint = (personId) => `${apiBaseUrl}/person/${personId}`;
const seasonEpisodesEndpoints = (seriesId, season_number) =>
  `${apiBaseUrl}/tv/${seriesId}/season/${season_number}`;
const searchEndpoint = (query) => `${apiBaseUrl}/search/multi?query=${query}`;

// IMAGE FALLBACKS
export const bannerImageFallback = `https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg`;
export const posterImageFallback = `https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg`;
export const castImageFallback = `https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg`;
export const providerImageFallback = `https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg`;

// IMAGE TYPES
// logo_sizes: 185, 300, 500
// backdrop_sizes: 300, 780, 1280
// poster_sizes: 342, 500, 780
// profile_sizes: 45, 185, 625
export const customImage = (path, size) => {
  return `${imageBaseUrl}/${size}${path}`;
};

// CALL API
const apiCall = async (endpoint, method = "GET", params, data) => {
  const options = {
    method,
    url: endpoint,
    params: params ? params : {},
    data: data ? data : {},
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

// FETCH API
export const fetchPopularMovies = () => {
  return apiCall(popularMoviesEndpoint);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};

export const fetchMovieDetails = (movieId) => {
  return apiCall(movieDetailsEndpoint(movieId));
};

export const fetchGenreMovies = (genreId) => {
  return apiCall(genreMoviesEndpoint(genreId));
};

export const fetchYearMovies = (year) => {
  return apiCall(yearMoviesEndpoint(year));
};

export const fetchMovieCredits = (movieId) => {
  return apiCall(movieCreditsEndpoint(movieId));
};

export const fetchNowPlayingMovies = () => {
  return apiCall(nowPlayingMoviesEndpoint);
};

export const fetchPopularSeries = () => {
  return apiCall(popularSeriesEndpoint);
};

export const fetchTopRatedSeries = () => {
  return apiCall(topRatedSeriesEndpoint);
};

export const fetchAiringTodaySeries = () => {
  return apiCall(airingTodaySeriesEndpoint);
};

export const fetchYearSeries = (seriesYear) => {
  return apiCall(yearSeriesEndpoint(seriesYear));
};

export const fetchGenreSeries = (genreId) => {
  return apiCall(genreSeriesEndpoint(genreId));
};

export const fetchSimilarMovies = (movieId) => {
  return apiCall(similarMoviesEndpoint(movieId));
};

export const fetchSimilarSeries = (seriesId) => {
  return apiCall(similarSeriesEndpoint(seriesId));
};

export const fetchSeriesDetails = (seriesId) => {
  return apiCall(seriesDetailsEndpoint(seriesId));
};

export const fetchSeriesCredits = (seriesId) => {
  return apiCall(seriesCreditsEndpoint(seriesId));
};

export const fetchPersonDetails = (personId) => {
  return apiCall(personDetailsEndpoint(personId));
};

export const fetchSeasonEpisodes = (seriesId, season_number) => {
  return apiCall(seasonEpisodesEndpoints(seriesId, season_number));
};

export const fetchDataFromQuery = (query) => {
  return apiCall(searchEndpoint(query));
};
