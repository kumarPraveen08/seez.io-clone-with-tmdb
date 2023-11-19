import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Menu({ title, data }) {
  const navigate = useNavigate();
  return (
    <MenuContainer>
      <span className="menuTitle">{title}</span>
      <div className="list">
        {data?.map((item, index) => (
          <div
            className="item"
            key={index}
            onClick={() => navigate(`${item.path}`)}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .menuTitle {
    color: var(--textSecondary);
    font-size: 14px;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .item {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      font-size: 15px;
      color: var(--textDark);
      svg {
        font-size: 18px;
        padding: 8px;
        border-radius: 5px;
        color: var(--textLight);
        &:hover {
          background-color: white;
          color: var(--background);
        }
      }
    }
  }
`;

export default Menu;
