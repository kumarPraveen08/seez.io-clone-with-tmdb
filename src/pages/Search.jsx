import { fetchDataFromQuery } from "api/Api";
import MovieList from "components/MovieList";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

function Search() {
  const [queryParameters] = useSearchParams();
  const query = queryParameters.get("query");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setData([]);
    getSearchData(query);
    setLoading(false);
  }, [query]);

  useEffect(() => {
    !query && navigate("/");
  }, [query, navigate]);

  const getSearchData = async (query) => {
    const data = await fetchDataFromQuery(query);
    setData(data?.results);
    setResults(data?.total_results);
  };

  return loading ? (
    "Loading..."
  ) : (
    <SearchContainer>
      <div className="container">
        <span className="results">
          Showing {data?.length || 0} results of {results || 0}
        </span>
        <h1>Seach results for {query}</h1>
        <MovieList title="" data={data} type="search" />
      </div>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  padding: 20px 40px;
  .results {
    font-size: 14px;
    color: var(--textDark);
  }
`;

export default Search;
