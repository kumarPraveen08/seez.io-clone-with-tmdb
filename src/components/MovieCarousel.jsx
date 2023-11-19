import React from "react";
import { styled } from "styled-components";
import MovieItem from "./MovieItem";

function MovieCarousel({ title, data, type }) {
  return (
    <MovieCarouselContainer>
      <div className="title">{title}</div>
      <div className="list">
        {data?.map((item, index) => (
          <MovieItem data={item} key={index} type={type} />
        ))}
      </div>
    </MovieCarouselContainer>
  );
}

const MovieCarouselContainer = styled.div`
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
  img {
    width: 180px !important;
    height: 280px;
  }
`;

export default MovieCarousel;
