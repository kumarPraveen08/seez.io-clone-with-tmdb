import {
  fetchAiringTodaySeries,
  fetchGenreSeries,
  fetchPopularSeries,
  fetchTopRatedSeries,
  fetchYearSeries,
} from "api/Api";
import MovieList from "components/MovieList";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { tvGenres } from "_data";
import { AiOutlineSearch } from "react-icons/ai";

function Series({ type }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { genreId, seriesYear } = useParams();
  const [series, setSeries] = useState([]);
  const [seriesType, setSeriesType] = useState("popular");
  const [loading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(seriesYear || currentYear);

  useEffect(() => {
    setLoading(true);
    if (pathname.includes("/popular") || pathname === "/tv") {
      setSeries([]);
      setSeriesType("popular");
      getPopularSeries();
    } else if (pathname.includes("/top_rated")) {
      setSeries([]);
      setSeriesType("top_rated");
      getTopRatedSeries();
    } else if (pathname.includes("/airing_today")) {
      setSeries([]);
      setSeriesType("airing_today");
      getAiringTodaySeries();
    } else if (pathname.includes("/genre")) {
      setSeries([]);
      setSeriesType("genre");
      getGenreSeries(genreId);
    } else if (pathname.includes("/year")) {
      setSeriesType("year");
      if (year.toString().length === 4 && year > 1800 && year <= currentYear) {
        setSeries([]);
        getYearSeries(year);
      }
    }
    setLoading(false);
  }, [pathname, genreId, year, currentYear]);

  const getPopularSeries = async () => {
    const data = await fetchPopularSeries();
    setSeries(data.results);
  };

  const getAiringTodaySeries = async () => {
    const data = await fetchAiringTodaySeries();
    setSeries(data.results);
  };

  const getTopRatedSeries = async () => {
    const data = await fetchTopRatedSeries();
    setSeries(data.results);
  };

  const getGenreSeries = async (genreId) => {
    const data = await fetchGenreSeries(genreId);
    setSeries(data.results);
  };

  const getYearSeries = async (year) => {
    const data = await fetchYearSeries(year);
    setSeries(data.results);
  };

  const handleYear = (year) => {
    if (year.length === 4 && 1800 && year <= currentYear) {
      setYear(year);
    }
  };
  return (
    <MoviesContainer>
      <h1>Browser TV Shows</h1>
      <div className="filters">
        <div
          className={`filter ${(type === "popular" || !type) && "active"}`}
          onClick={() => navigate("/tv/popular")}
        >
          popular
        </div>
        <div
          className={`filter ${type === "top_rated" && "active"}`}
          onClick={() => navigate("/tv/top_rated")}
        >
          top
        </div>
        <div
          className={`filter ${type === "airing_today" && "active"}`}
          onClick={() => navigate("/tv/airing_today")}
        >
          airing today
        </div>
        <div
          className={`filter ${type === "genre" && "active"}`}
          onClick={() => navigate("/tv/genre")}
        >
          genre
        </div>
        <div
          className={`filter ${type === "year" && "active"}`}
          onClick={() => navigate("/tv/year")}
        >
          year
        </div>
      </div>
      {/* genre options */}
      {seriesType === "genre" && (
        <div className="genres">
          {tvGenres?.map((genre, index) => (
            <div
              className={`genre ${genre?.id === Number(genreId) && "active"}`}
              key={index}
              onClick={() => navigate(`/tv/genre/${genre.id}`)}
            >
              {genre?.name}
            </div>
          ))}
        </div>
      )}

      {/* year input */}
      {seriesType === "year" && (
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
      ) : series?.length > 0 ? (
        <MovieList type="tv" data={series} title="" />
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

export default Series;
