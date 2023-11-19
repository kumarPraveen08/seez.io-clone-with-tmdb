import Collections from "components/Collections";
import { styled } from "styled-components";

function Collection() {
  return (
    <CollectionContainer>
      <Collections />
    </CollectionContainer>
  );
}

const CollectionContainer = styled.div`
  padding: 20px 40px;
`;

export default Collection;
