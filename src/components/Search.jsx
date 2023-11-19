import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getData = setTimeout(() => {
      navigate(`/search?query=${query}`);
    }, 1000);

    return () => clearTimeout(getData);
  }, [query, navigate]);

  return (
    <SearchContainer>
      <input
        type="text"
        value={query}
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <AiOutlineSearch />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  input {
    padding: 10px;
    background-color: #202830;
    border: none;
    border-radius: 5px;
    color: var(--textSecondary);
    width: 400px;
    &::placeholder {
      color: var(--textSecondary);
    }
    &:focus {
      outline: none;
    }
  }
  svg {
    position: absolute;
    left: 395px;
    color: gray;
  }
`;

export default Search;
