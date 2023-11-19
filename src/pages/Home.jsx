import MovieCarousel from "components/MovieCarousel";
import ViewedList from "components/ViewedList";
import { styled } from "styled-components";
import { user } from "_data";
import Collections from "components/Collections";
import { useEffect, useState } from "react";
import {
  fetchAiringTodaySeries,
  fetchGenreMovies,
  fetchGenreSeries,
  fetchNowPlayingMovies,
} from "api/Api";

function Home() {
  // const user = false;
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [scifiMovies, setScifiMovies] = useState([]);
  const [kidsMovies, setKidsMovies] = useState([]);
  const [todayAiringSeries, setTodayAiringSeries] = useState([]);
  const [documentariesSeries, setDocumentariesSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getNowPlayingMovies();
    getHorrorMovies();
    getThrillerMovies();
    getScifiMovies();
    getKidsMovies();
    getTodayAiringSeries();
    getDocumentariesSeries();
    setLoading(false);
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetchNowPlayingMovies();
    setNowPlayingMovies(data.results);
  };

  const getHorrorMovies = async () => {
    const data = await fetchGenreMovies(27);
    setHorrorMovies(data.results);
  };

  const getThrillerMovies = async () => {
    const data = await fetchGenreMovies(53);
    setThrillerMovies(data.results);
  };

  const getScifiMovies = async () => {
    const data = await fetchGenreMovies(878);
    setScifiMovies(data.results);
  };

  const getKidsMovies = async () => {
    const data = await fetchGenreMovies(16);
    setKidsMovies(data.results);
  };

  const getTodayAiringSeries = async () => {
    const data = await fetchAiringTodaySeries();
    setTodayAiringSeries(data.results);
  };

  const getDocumentariesSeries = async () => {
    const data = await fetchGenreSeries(99);
    setDocumentariesSeries(data.results);
  };
  return loading ? (
    "Loading..."
  ) : (
    <HomeContainer>
      {/* explore banners */}
      <div className="explore">
        <div className="left">
          <div className="title">
            Keep track of all the tv shows and movies you want to watch.
          </div>
          <div className="details">
            <span>Yes, It's all free.</span>
            <span>Movies . Tv Shows . Anime</span>
          </div>
        </div>
        <div className="right">
          <div className="title">
            If you like us share our site to your friends.
          </div>
          <div className="details">
            <span>Join to our social groups.</span>
            <span>Facebook . Twitter . Discord</span>
          </div>
        </div>
      </div>

      {/* recently views */}
      {user && <ViewedList title="Recently Viewed" data={user?.items} />}

      {/* now playing */}
      <MovieCarousel
        title="Now Playing Movies"
        data={nowPlayingMovies}
        type="movie"
      />

      {/* top horror */}
      <MovieCarousel title="Top Horror" data={horrorMovies} type="movie" />

      {/* top thriller */}
      <MovieCarousel title="Top Thriller" data={thrillerMovies} type="movie" />

      {/* top Sci-Fi */}
      <MovieCarousel title="Top Sci-Fi" data={scifiMovies} type="movie" />

      {/* top kids */}
      <MovieCarousel title="Top Kids" data={kidsMovies} type="movie" />

      {/* banner */}
      <div className="banner">
        <div className="left">
          <div className="title">
            Keep track of all the tv shows and movies you want to watch.
          </div>
          <div className="details">
            <span>Yes, It's all free.</span>
            <span>Movies . Tv Shows . Anime</span>
          </div>
        </div>
        <div className="right">
          <img src="./avatar.png" alt="" />
        </div>
      </div>

      {/* collections */}
      <Collections />

      {/* now airing tv shows */}
      <MovieCarousel
        title="Now Airing TV Shows"
        data={todayAiringSeries}
        type="tv"
      />

      {/* documentaries */}
      <MovieCarousel
        title="Documentaries"
        data={documentariesSeries}
        type="tv"
      />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 30px;
  .explore {
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 15px;
    .left {
      background-color: var(--backgroundSecondary);
      padding: 40px;
      border-radius: 15px;
      flex: 5;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .title {
        font-size: 24px;
        width: 50%;
        font-weight: 800;
      }
      .details {
        display: flex;
        flex-direction: column;
        gap: 5px;
        span {
          font-size: 14px;
          &:first-child {
            font-weight: 500;
            font-size: 18px;
          }
        }
      }
    }
    .right {
      background-color: var(--backgroundSecondary);
      padding: 40px;
      border-radius: 15px;
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .title {
        font-size: 24px;
        font-weight: 800;
      }
      .details {
        display: flex;
        flex-direction: column;
        gap: 5px;
        span {
          font-size: 14px;
          &:first-child {
            font-weight: 500;
            font-size: 18px;
          }
        }
      }
    }
  }
  .banner {
    background-color: var(--backgroundSecondary);
    border-radius: 15px;
    flex: 5;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    .left {
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .title {
        font-size: 24px;
        width: 70%;
        font-weight: 800;
      }
      .details {
        display: flex;
        flex-direction: column;
        gap: 5px;
        span {
          font-size: 14px;
          &:first-child {
            font-weight: 500;
            font-size: 18px;
          }
        }
      }
    }
    .right {
      padding: 20px 20px 0px 0px;
      img {
        width: 180px;
      }
    }
  }
`;

export default Home;
