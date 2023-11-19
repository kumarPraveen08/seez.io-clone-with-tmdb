import { castImageFallback, customImage } from "api/Api";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function CastItem({ data }) {
  const navigate = useNavigate();
  return (
    <CastItemContainer>
      <img
        src={
          data?.profile_path
            ? customImage(data?.profile_path, "w500")
            : castImageFallback
        }
        alt={data?.name}
        onClick={() => navigate(`/person/${data.id}`)}
      />
      <span className="castName">
        {data?.name?.length > 18 ? data.name.slice(0, 18) : data.name}
      </span>
      <span className="castRole">
        {data?.character > 18 ? data.character.slice(0, 18) : data.character}
      </span>
    </CastItemContainer>
  );
}

const CastItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 10px;
  cursor: pointer;
  max-width: 180px;
  img {
    width: 180px !important;
    height: 250px;
    border-radius: 15px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .castName {
    font-size: 16px;
  }
  .castRole {
    font-size: 14px;
    color: var(--textDark);
  }
`;

export default CastItem;
