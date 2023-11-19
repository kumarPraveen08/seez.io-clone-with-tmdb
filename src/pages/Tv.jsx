import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CastCarousel from "components/CastCarousel";
import MovieCarousel from "components/MovieCarousel";
import { styled } from "styled-components";
import { SlCalender } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import { BsFillJournalBookmarkFill, BsCollectionPlay } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { HiPlay } from "react-icons/hi2";
import {
  bannerImageFallback,
  customImage,
  fetchSeriesCredits,
  fetchSeriesDetails,
  fetchSimilarSeries,
  posterImageFallback,
} from "api/Api";

function Tv() {
  const [series, setSeries] = useState({});
  const [similarSeries, setSimilarSeries] = useState({});
  const [seriesCast, setSeriesCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { seriesId } = useParams();
  const navigate = useNavigate();
  const trailers =
    series?.videos?.results.length > 4
      ? series?.videos?.results.slice(0, 4)
      : series?.videos?.results;

  useEffect(() => {
    setLoading(true);
    getSeriesDetails(seriesId);
    getSeriesCredits(seriesId);
    getSimilarSeries(seriesId);
    setLoading(false);
  }, [seriesId]);

  const getSeriesDetails = async (seriesId) => {
    const data = await fetchSeriesDetails(seriesId);
    setSeries(data);
    console.log(data);
  };

  const getSeriesCredits = async (seriesId) => {
    const data = await fetchSeriesCredits(seriesId);
    setSeriesCast(data.cast);
  };

  const getSimilarSeries = async (seriesId) => {
    const data = await fetchSimilarSeries(seriesId);
    setSimilarSeries(data.results);
  };
  return loading ? (
    "Loading..."
  ) : (
    <TvContainer>
      {/* banner */}
      <img
        src={
          (series?.backdrop_path &&
            customImage(series?.backdrop_path, "original")) ||
          bannerImageFallback
        }
        alt={series?.name}
      />
      <div className="overlay"></div>

      <div className="seriesContainer">
        {/* series meta */}
        <div className="seriesDetails">
          <div className="left">
            <img
              src={
                (series?.poster_path &&
                  customImage(series?.poster_path, "original")) ||
                posterImageFallback
              }
              alt={series?.name}
            />
          </div>
          <div className="right">
            <h1>{series?.name}</h1>
            <div className="genres">
              {series?.genres?.map((genre) => (
                <span
                  key={genre?.id}
                  onClick={() => navigate(`/tv/genre/${genre?.id}`)}
                >
                  {genre?.name}
                </span>
              ))}
            </div>
            <div className="meta">
              <span>
                <BsCollectionPlay /> {series?.number_of_seasons || 0}
              </span>
              <span>
                <GoVideo /> {series?.number_of_episodes || 0}
              </span>

              <span>
                <SlCalender />
                {series?.first_air_date?.split("-")[0] || "unknown"} -{" "}
                {series?.last_air_date?.split("-")[0] || "unknown"}
              </span>
              <span>
                <AiFillStar fill="#ffce45" />
                {Number(series?.vote_average).toFixed(2)}
              </span>
            </div>
            <div className="actions">
              <button
                onClick={() =>
                  navigate(
                    `/tv/${seriesId}/season/${series?.seasons[0]?.season_number}`
                  )
                }
              >
                <HiPlay />
                seasons
              </button>
              <button>
                <BsFillJournalBookmarkFill />
                Add to
              </button>
            </div>
          </div>
        </div>

        <div className="seriesContent">
          {/* synopsis */}
          <div className="item">
            <div className="title">Synopsis</div>
            {series?.overview ? (
              <p>{series?.overview}</p>
            ) : (
              "No overview to show"
            )}
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
            {seriesCast?.length > 0 ? (
              <CastCarousel
                casts={
                  seriesCast?.length > 20
                    ? seriesCast?.slice(0, 20)
                    : seriesCast
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
            {similarSeries.length > 0 ? (
              <MovieCarousel title="" data={similarSeries} type="tv" />
            ) : (
              "No tv shows to show"
            )}
          </div>
        </div>
      </div>
    </TvContainer>
  );
}

const TvContainer = styled.div`
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
  .seriesContainer {
    padding: 20px 40px;
    .seriesDetails {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 40px;
      .left {
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

    .seriesContent {
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
`;

export default Tv;
