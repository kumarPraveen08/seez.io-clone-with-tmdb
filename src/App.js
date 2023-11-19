import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// PATHS
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Series from "./pages/Series";
import Season from "./pages/Season";
import Cast from "./pages/Cast";
import Tv from "./pages/Tv";
import NotFound from "pages/NotFound";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Collection from "./pages/Collection";

// REACT SLICK
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "pages/Search";

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // HOMEPAGE
      { path: "/", element: <Home /> },

      // MOVIE ROUTES
      { path: "/movies", element: <Movies /> },
      { path: "/movies/popular", element: <Movies type="popular" /> },
      { path: "/movies/top_rated", element: <Movies type="top_rated" /> },
      { path: "/movies/upcoming", element: <Movies type="upcoming" /> },
      { path: "/movies/year/:movieYear", element: <Movies type="year" /> },
      { path: "/movies/year/", element: <Movies type="year" /> },
      {
        path: "/movies/genre/:genreId",
        element: <Movies type="genre" />,
      },
      { path: "/movies/genre/", element: <Movies type="genre" /> },
      { path: "/movie/:movieId", element: <Movie /> },

      // TV ROUTES
      { path: "/tv", element: <Series /> },
      { path: "/tv/popular", element: <Series type="popular" /> },
      { path: "/tv/top_rated", element: <Series type="top_rated" /> },
      { path: "/tv/airing_today", element: <Series type="airing_today" /> },
      { path: "/tv/year/:seriesYear", element: <Series type="seriesYear" /> },
      { path: "/tv/year/", element: <Series type="seriesYear" /> },
      { path: "/tv/genre/:genreId", element: <Series type="genre" /> },
      { path: "/tv/genre/", element: <Series type="genre" /> },
      { path: "/tv/:seriesId", element: <Tv /> },
      { path: "/tv/:seriesId/season/:season_number", element: <Season /> },

      // CAST ROUTES
      { path: "/person/:personId", element: <Cast /> },

      // SEARCH ROUTES
      { path: "/search", element: <Search /> },

      // COLLECTIONS ROUTES
      { path: "/collection", element: <Collection /> },

      // PROVIDER MOVIE LIST
      {
        path: ":provider/movies/popular",
        element: <Movies type="popular" />,
      },
      {
        path: ":provider/movies/top_rated",
        element: <Movies type="top_rated" />,
      },
      {
        path: ":provider/movies/upcoming",
        element: <Movies type="upcoming" />,
      },
      {
        path: ":provider/movies/year/:year",
        element: <Movies type="year" />,
      },
      {
        path: ":provider/movies/genre/:genreId",
        element: <Movies type="genre" />,
      },

      // PROVIDER TV LIST
      {
        path: ":provider/tv/popular",
        element: <Series type="popular" />,
      },
      {
        path: ":provider/tv/top_rated",
        element: <Series type="top_rated" />,
      },
      { path: ":provider/tv/airing", element: <Series type="airing" /> },
      {
        path: ":provider/tv/year/:year",
        element: <Series type="year" />,
      },
      {
        path: ":provider/tv/genre/:genreId",
        element: <Series type="genre" />,
      },

      // AUTH ROUTES
      { path: "/register", element: <SignUp /> },
      { path: "/login", element: <SignIn /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
