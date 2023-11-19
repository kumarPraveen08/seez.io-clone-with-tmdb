import {
  fetchGenreMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchYearMovies,
} from "api/Api";
import MovieList from "components/MovieList";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { movieGenres } from "_data";
import { AiOutlineSearch } from "react-icons/ai";

function Movies({ type }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { genreId, movieYear } = useParams();
  const [movies, setMovies] = useState([]);
  const [movieType, setMovieType] = useState("popular");
  const [loading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(movieYear || currentYear);

  useEffect(() => {
    setLoading(true);
    if (pathname.includes("/popular") || pathname === "/movies") {
      setMovies([]);
      setMovieType("popular");
      getPopularMovies();
    } else if (pathname.includes("/top_rated")) {
      setMovies([]);
      setMovieType("top_rated");
      getTopRatedMovies();
    } else if (pathname.includes("/upcoming")) {
      setMovies([]);
      setMovieType("upcoming");
      getUpcomingMovies();
    } else if (pathname.includes("/genre")) {
      setMovies([]);
      setMovieType("genre");
      getGenreMovies(genreId);
    } else if (pathname.includes("/year")) {
      setMovieType("year");
      if (year.toString().length === 4 && year > 1800 && year <= currentYear) {
        setMovies([]);
        getYearMovies(year);
      }
    }
    setLoading(false);
  }, [pathname, genreId, year, currentYear]);

  const getPopularMovies = async () => {
    const data = await fetchPopularMovies();
    setMovies(data.results);
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    setMovies(data.results);
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    setMovies(data.results);
  };

  const getGenreMovies = async (genreId) => {
    const data = await fetchGenreMovies(genreId);
    setMovies(data.results);
  };

  const getYearMovies = async (year) => {
    const data = await fetchYearMovies(year);
    setMovies(data.results);
  };

  const handleYear = (year) => {
    if (year.length === 4 && 1800 && year <= currentYear) {
      setYear(year);
    }
  };
  return (
    <MoviesContainer>
      <h1>Browser Movies</h1>
      <div className="filters">
        <div
          className={`filter ${(type === "popular" || !type) && "active"}`}
          onClick={() => navigate("/movies/popular")}
        >
          popular
        </div>
        <div
          className={`filter ${type === "top_rated" && "active"}`}
          onClick={() => navigate("/movies/top_rated")}
        >
          top
        </div>
        <div
          className={`filter ${type === "upcoming" && "active"}`}
          onClick={() => navigate("/movies/upcoming")}
        >
          upcoming
        </div>
        <div
          className={`filter ${type === "genre" && "active"}`}
          onClick={() => navigate("/movies/genre")}
        >
          genre
        </div>
        <div
          className={`filter ${type === "year" && "active"}`}
          onClick={() => navigate("/movies/year")}
        >
          year
        </div>
      </div>
      {/* genre options */}
      {movieType === "genre" && (
        <div className="genres">
          {movieGenres?.map((genre, index) => (
            <div
              className={`genre ${genre?.id === Number(genreId) && "active"}`}
              key={index}
              onClick={() => navigate(`/movies/genre/${genre.id}`)}
            >
              {genre?.name}
            </div>
          ))}
        </div>
      )}

      {/* year input */}
      {movieType === "year" && (
        <div className="searchYear">
          <label for="year">Search by year:</label>
          <input
            name="year"
            type="text"
            placeholder="2023"
            onChange={(e) => handleYear(e.target.value)}
          />
          <AiOutlineSearch />
        </div>
      )}
      {loading ? (
        "Loading..."
      ) : movies?.length > 0 ? (
        <MovieList type="movie" data={movies} title="" />
      ) : (
        "Movies not found!"
      )}
    </MoviesContainer>
  );
}

const MoviesContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  h1 {
    font-size: 36px;
  }
  .filters {
    display: flex;
    align-items: center;
    gap: 5px;
    .filter {
      background-color: rgba(255, 255, 255, 0.05);
      padding: 8px 15px;
      border-radius: 10px;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background-color: white;
        color: var(--background);
      }
      &.active {
        background-color: white;
        color: var(--background);
      }
    }
  }
  .genres {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0px;
    .genre {
      padding: 15px 20px;
      font-size: 14px;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 5px;
      min-width: 150px;
      cursor: pointer;
      text-align: center;
      &.active {
        background-color: var(--textLight);
        color: var(--background);
      }
    }
  }
  .searchYear {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    input {
      padding: 10px;
      background-color: #202830;
      border: none;
      border-radius: 5px;
      color: var(--textSecondary);
      width: 500px;
      margin: 10px 0px;
      &::placeholder {
        color: var(--textDark);
      }
      &:focus {
        outline: none;
      }
    }
    svg {
      position: absolute;
      left: 620px;
      color: var(--textDark);
    }
  }
`;

export default Movies;
