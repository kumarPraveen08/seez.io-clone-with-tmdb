import { providers } from "_data";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Collections() {
  const navigate = useNavigate();
  return (
    <CollectionContainer>
      <div className="title">Collections</div>
      <div className="providers">
        {providers?.map((provider) => (
          <img
            src={provider.img}
            alt={provider.name}
            key={provider.id}
            onClick={() => navigate(provider.path)}
          />
        ))}
      </div>
    </CollectionContainer>
  );
}

const CollectionContainer = styled.div`
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .providers {
    display: flex;
    align-items: center;
    gap: 22px;
    img {
      width: 180px;
      height: 180px;
      border-radius: 15px;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;

export default Collections;
