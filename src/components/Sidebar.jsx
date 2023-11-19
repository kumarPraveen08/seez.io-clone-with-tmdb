import React from "react";
import { styled } from "styled-components";
import { menu, misc, user_menu } from "_data";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const user = true;
  const navigate = useNavigate();
  return (
    <SidebarContainer>
      <div className="container">
        <div className="logo" onClick={() => navigate("/")}>
          SEEZ
        </div>
        {/* menu */}
        <Menu title="Menu" data={menu} />
        {/* misc */}
        <Menu title="Misc" data={misc} />
        {/* user menu */}
        {user && <Menu title="My List" data={user_menu} />}
      </div>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 260px;
  border-right: 1px solid #2d2d2d;
  height: 100vh;
  position: sticky;
  top: 0;
  .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    .logo {
      font-size: 28px;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

export default Sidebar;
