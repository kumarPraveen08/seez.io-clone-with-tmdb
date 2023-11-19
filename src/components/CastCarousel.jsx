import React from "react";
import { styled } from "styled-components";
import CastItem from "./CastItem";

function CastCarousel({ casts, title }) {
  return (
    <CastCarouselContainer>
      <div className="title">{title}</div>
      <div className="casts">
        {casts?.map((cast) => (
          <CastItem data={cast} key={cast.id} />
        ))}
      </div>
    </CastCarouselContainer>
  );
}

const CastCarouselContainer = styled.div`
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .casts {
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
  }
`;

export default CastCarousel;
