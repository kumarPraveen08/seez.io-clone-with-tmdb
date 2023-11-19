import CastCarousel from "components/CastCarousel";
import MovieCarousel from "components/MovieCarousel";
import { styled } from "styled-components";
import { SlCalender } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { HiPlay } from "react-icons/hi2";
import { useEffect, useState } from "react";
import {
  bannerImageFallback,
  customImage,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  posterImageFallback,
} from "api/Api";
import { useNavigate, useParams } from "react-router-dom";
import { movieContentEndpoint } from "api/Content";

function Movie() {
  const [player, setPlayer] = useState(false);
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState({});
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const trailers =
    movie?.videos?.results.length > 4
      ? movie?.videos?.results.slice(0, 4)
      : movie?.videos?.results;

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId);
    getMovieCredits(movieId);
    getSimilarMovies(movieId);
    setLoading(false);
  }, [movieId]);

  const getMovieDetails = async (movieId) => {
    const data = await fetchMovieDetails(movieId);
    setMovie(data);
  };

  const getMovieCredits = async (movieId) => {
    const data = await fetchMovieCredits(movieId);
    setMovieCast(data.cast);
  };

  const getSimilarMovies = async (movieId) => {
    const data = await fetchSimilarMovies(movieId);
    setSimilarMovies(data.results);
  };

  return loading ? (
    "Loading..."
  ) : (
    <MovieContainer>
      {/* banner */}
      <img
        src={
          (movie?.backdrop_path &&
            customImage(movie?.backdrop_path, "original")) ||
          bannerImageFallback
        }
        alt={movie?.title}
      />
      <div className="overlay"></div>

      <div className="movieContainer">
        {/* movie meta */}
        <div className="movieDetails">
          <div className="left">
            <img
              src={
                (movie?.poster_path &&
                  customImage(movie?.poster_path, "original")) ||
                posterImageFallback
              }
              alt={movie?.title}
            />
          </div>
          <div className="right">
            <h1>{movie?.title}</h1>
            <div className="genres">
              {movie?.genres?.map((genre) => (
                <span
                  key={genre?.id}
                  onClick={() => navigate(`/movies/genre/${genre?.id}`)}
                >
                  {genre?.name}
                </span>
              ))}
            </div>
            <div className="meta">
              <span>
                <IoMdTime /> {movie?.runtime + "m" || "0m"}
              </span>
              <span>
                <SlCalender />
                {movie?.release_date?.split("-")[0] || "unknown"}
              </span>
              <span>
                <AiFillStar fill="#ffce45" />
                {Number(movie?.vote_average).toFixed(2)}
              </span>
            </div>
            <div className="actions">
              <button type="button" onClick={() => setPlayer(!player)}>
                <HiPlay />
                play
              </button>
              <button>
                <BsFillJournalBookmarkFill />
                Add to
              </button>
            </div>
          </div>
        </div>

        <div className="movieContent">
          {/* synopsis */}
          <div className="item">
            <div className="title">Synopsis</div>
            {movie?.overview ? <p>{movie?.overview}</p> : "No overview to show"}
          </div>

          {/* trailer */}
          <div className="item">
            <div className="title">Trailer</div>
            <div className="videos">
              {trailers
                ? trailers?.map((trailer, index) => (
                    <iframe
                      key={index}
                      width="380px"
                      height="200px"
                      src={`${
                        trailer?.site === "YouTube"
                          ? `https://www.youtube.com/embed/${trailer?.key}`
                          : trailer?.site === "Vimeo"
                          ? `https://www.youtube.com/embed/${trailer?.key}`
                          : ""
                      }`}
                      title={trailer?.name || "unknown"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ))
                : "No trailer to show"}
            </div>
          </div>

          {/* cast */}
          <div className="item">
            <div className="title">Casts</div>
            {movieCast.length > 0 ? (
              <CastCarousel
                casts={
                  movieCast?.length > 20 ? movieCast?.slice(0, 20) : movieCast
                }
                title=""
              />
            ) : (
              "No cast to show"
            )}
          </div>

          {/* you may also like */}
          <div className="item">
            <div className="title">You May Also Like</div>
            {similarMovies.length > 0 ? (
              <MovieCarousel title="" data={similarMovies} type="movie" />
            ) : (
              "No movie to show"
            )}
          </div>
        </div>
      </div>

      {player && (
        <div className="playerContainer">
          <div className="player">
            <iframe
              src={
                movieContentEndpoint(movieId) ||
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
              title="Demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <IoCloseCircleOutline onClick={() => setPlayer(!player)} />
        </div>
      )}
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    max-height: 800px;
    object-fit: cover;
    background-image: linear-gradient(to right, red, yellow);
  }
  .overlay {
    width: 100%;
    height: 800px;
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(10, 16, 22, 0.15),
      rgb(10, 16, 22)
    );
    position: absolute;
  }
  .movieContainer {
    padding: 20px 40px;
    .movieDetails {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 40px;
      margin-top: -70px;
      .left {
        z-index: 2;
        img {
          width: 200px;
          max-height: 300px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 10px 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        gap: 15px;
        h1 {
          font-size: 32px;
          margin: 10px 0px;
        }
        .genres {
          display: flex;
          align-items: center;
          gap: 5px;
          span {
            padding: 6px 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 12px;
            border-radius: 10px;
            background-color: var(--backgroundSecondary);
            cursor: pointer;
          }
        }
        .meta {
          display: flex;
          align-items: center;
          gap: 10px;
          span {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 14px;
            color: var(--textDark);
          }
        }
        .actions {
          display: flex;
          align-items: center;
          gap: 10px;
          button {
            display: flex;
            align-items: center;
            gap: 8px;
            border: none;
            background-color: #ffce45;
            border-radius: 15px;
            padding: 8px 15px;
            cursor: pointer;
            &:first-child {
              background-color: #2d2d2d;
              color: var(--textSecondary);
            }
          }
        }
      }
    }
    .movieContent {
      display: flex;
      flex-direction: column;
      gap: 25px;
      .item {
        margin-bottom: 20px;
        .title {
          font-size: 24px;
        }
        .videos {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
          iframe {
            margin-top: 20px;
            border: 0px;
          }
        }
        p {
          margin-bottom: 0;
        }
      }
    }
  }
  .playerContainer {
    .player {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      z-index: 4;
      background-color: white;
      iframe {
        width: calc(100% - 230px);
        height: 100%;
        border: 0px;
      }
    }
    svg {
      position: fixed;
      right: 15px;
      top: 15px;
      font-size: 40px;
      color: var(--background);
      z-index: 5;
      background-color: white;
      padding: 10px;
      cursor: pointer;
    }
  }
`;

export default Movie;
