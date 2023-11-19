import { customImage, posterImageFallback } from "api/Api";
import React from "react";
import { styled } from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function MovieItem({ data, type }) {
  const navigate = useNavigate();
  if (type === "search") {
    type = data?.media_type;
  }
  return (
    <MovieItemContainer>
      <img
        src={
          data?.poster_path
            ? customImage(data?.poster_path, "w500")
            : posterImageFallback
        }
        alt={data?.title}
        onClick={() =>
          navigate(
            `/${type === "movie" ? "movie" : type === "tv" ? "tv" : "person"}/${
              data.id
            }`
          )
        }
      />
      <div className="rating">
        {data?.vote_average || "0.0"}
        {<AiFillStar fill="#f2b01e" />}
      </div>
      <div className="year">
        {type === "movie"
          ? data?.release_date?.split("-")[0]
          : data?.first_air_date?.split("-")[0] || "unknown"}
      </div>
    </MovieItemContainer>
  );
}

const MovieItemContainer = styled.div`
  position: relative;
  font-size: 10px;
  cursor: pointer;
  img {
    width: 180px !important;
    height: 280px;
    border-radius: 15px;
    object-fit: cover;

    /* &:hover {
      border: 1px solid rgba(255, 255, 255, 1);
      width: 178px;
      height: 278px;
    } */
  }
  .rating {
    position: absolute;
    top: 10px;
    left: 15px;
    padding: 2px 8px;
    background-color: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(8px);
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: 0.1px solid rgba(255, 255, 255, 0.1);
  }
  .year {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 2px 8px;
    background-color: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(8px);
    border-radius: 6px;
    border: 0.1px solid rgba(255, 255, 255, 0.1);
  }
`;

export default MovieItem;
