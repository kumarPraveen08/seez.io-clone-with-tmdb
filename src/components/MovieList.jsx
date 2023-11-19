import React from "react";
import { styled } from "styled-components";
import MovieItem from "./MovieItem";

function MovieList({ title, data, type }) {
  return (
    <MovieListContainer>
      <div className="title">{title}</div>
      <div className="list">
        {data?.map((item, index) => (
          <MovieItem data={item} key={index} type={type} />
        ))}
      </div>
    </MovieListContainer>
  );
}

const MovieListContainer = styled.div`
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 22px;
  }
`;

export default MovieList;
