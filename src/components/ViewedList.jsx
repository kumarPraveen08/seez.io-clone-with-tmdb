import React from "react";
import MovieItem from "./MovieItem";
import { styled } from "styled-components";

function ViewedList({ data, title }) {
  return (
    <ViewedListContainer>
      <div className="title">{title}</div>
      <div className="list">
        {data?.map((item, index) => (
          <MovieItem data={item?.data} key={index} type={item.type} />
        ))}
      </div>
    </ViewedListContainer>
  );
}

const ViewedListContainer = styled.div`
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

export default ViewedList;
