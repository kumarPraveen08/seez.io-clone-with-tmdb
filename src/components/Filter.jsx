// import React from "react";
// import { styled } from "styled-components";

// function Filter({ filterType, type, handleFilter }) {
//   return (
//     <FilterContainer>
//       <h1>Browser {type}</h1>
//       <div className="filters">
//         <div
//           className={`filter ${filterType === "popular" && "active"}`}
//           onClick={() => handleFilter("popular")}
//         >
//           popular
//         </div>
//         <div className={`filter ${filterType === "top_rated" && "active"}`}>
//           top
//         </div>
//         <div className={`filter ${filterType === "upcoming" && "active"}`}>
//           upcoming
//         </div>
//         <div className={`filter ${filterType === "genre" && "active"}`}>
//           genre
//         </div>
//         <div className={`filter ${filterType === "year" && "active"}`}>
//           year
//         </div>
//       </div>
//     </FilterContainer>
//   );
// }

// const FilterContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   h1 {
//     font-size: 36px;
//   }
//   .filters {
//     display: flex;
//     align-items: center;
//     gap: 5px;
//     .filter {
//       background-color: rgba(255, 255, 255, 0.05);
//       padding: 8px 15px;
//       border-radius: 10px;
//       font-size: 14px;
//       cursor: pointer;
//       &:hover {
//         background-color: white;
//         color: var(--background);
//       }
//       &.active {
//         background-color: white;
//         color: var(--background);
//       }
//     }
//   }
// `;

// export default Filter;
