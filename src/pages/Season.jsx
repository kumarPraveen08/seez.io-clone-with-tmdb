import { styled } from "styled-components";
import {
  castImageFallback,
  customImage,
  fetchSeasonEpisodes,
  fetchSeriesDetails,
} from "api/Api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FiPlay } from "react-icons/fi";
import { seriesContentEndpoint } from "api/Content";

function Season() {
  const navigate = useNavigate();
  const { seriesId, season_number } = useParams();
  const [player, setPlayer] = useState(false);
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  useEffect(() => {
    setLoading(true);
    getSeasons(seriesId);
    setEpisodes([]);
    getSeasonEpisodes(seriesId, season_number);
    setLoading(false);
  }, [seriesId, season_number]);

  const getSeasons = async (seriesId) => {
    const data = await fetchSeriesDetails(seriesId);
    setSeasons(data?.seasons);
  };

  const getSeasonEpisodes = async (seriesId, season_number) => {
    const data = await fetchSeasonEpisodes(seriesId, season_number);
    setEpisodes(data?.episodes);
    console.log(data?.episodes);
  };

  const handleClick = (e) => {
    setPlayer(!player);
    setSelectedEpisode(e);
  };
  return loading ? (
    "Loading..."
  ) : (
    <SeasonContainer>
      <div className="container">
        <h1>
          <span onClick={() => navigate(`/tv/${seriesId}`)}>
            <BsArrowLeftShort />
          </span>
          one piece
        </h1>
        <div className="seasons">
          {seasons?.map((season, index) => (
            <div
              className={`season ${
                season?.season_number === Number(season_number) && "active"
              }`}
              key={index}
              onClick={() =>
                navigate(`/tv/${seriesId}/season/${season?.season_number}`)
              }
            >
              {season?.season_number}
            </div>
          ))}
        </div>
        <div className="currentSeason">{seasons?.name}</div>
        <div className="episodes">
          {episodes?.map((episode, index) => (
            <div className="episode" key={index}>
              <div
                className="thumbnail"
                onClick={() => handleClick(episode?.episode_number)}
              >
                <img
                  src={
                    (episode?.still_path &&
                      customImage(episode?.still_path, "w500")) ||
                    castImageFallback
                  }
                  alt={episode?.name}
                />
                <div className="overlay"></div>
                <FiPlay />
              </div>
              <div className="details">
                <div className="meta">
                  <span
                    className="episodeName"
                    onClick={() => handleClick(episode?.episode_number)}
                  >
                    {episode?.name}
                  </span>
                  <span>
                    {episode?.runtime ? episode?.runtime + "m" : "unknown"}
                  </span>
                </div>
                <div className="description">
                  {episode?.overview?.length > 120
                    ? episode?.overview?.slice(0, 120) + "..."
                    : episode?.overview}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {player && (
        <div className="playerContainer">
          <div className="player">
            <iframe
              src={
                seriesContentEndpoint(
                  seriesId,
                  season_number,
                  selectedEpisode
                ) ||
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
    </SeasonContainer>
  );
}

const SeasonContainer = styled.div`
  padding: 20px 40px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 25px;
    h1 {
      display: flex;
      align-items: center;
      gap: 10px;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
      }
    }
    .seasons {
      display: flex;
      align-items: center;
      gap: 8px;
      .season {
        padding: 8px 16px;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 5px;
        cursor: pointer;
        &.active {
          background-color: var(--textLight);
          color: var(--background);
        }
      }
    }
    .episodes {
      display: flex;
      flex-wrap: wrap;
      gap: 22px;
      .episode {
        max-width: 280px;
        .thumbnail {
          position: relative;
          img {
            width: 280px;
            height: 180px;
            object-fit: cover;
            margin-bottom: 5px;
            cursor: pointer;
            border-radius: 15px;
          }
          .overlay {
            width: 100%;
            height: 100%;
            top: 0;
            background: linear-gradient(
              to bottom,
              rgba(10, 16, 22, 0.15),
              rgb(10, 16, 22)
            );
            position: absolute;
          }
          svg {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            font-size: 24px;
            cursor: pointer;
          }
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .episodeName {
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .description {
            font-size: 12px;
            color: var(--textDark);
          }
        }
      }
    }
  }
  .playerContainer {
    .player {
      width: 98%;
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

export default Season;
