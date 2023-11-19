import { BiUserCircle } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { styled } from "styled-components";
import { BsSun } from "react-icons/bs";
import Search from "components/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const navigate = useNavigate();
  // const user = {
  //   name: "praveen prajapati",
  //   email: "user@email.com",
  //   password: "123456",
  // };
  const user = false;
  return (
    <TopbarContainer>
      <div className="container">
        <div className="left">
          <Search />
        </div>
        <div className="right">
          {user ? (
            "user@email.com"
          ) : (
            <BiUserCircle onClick={() => navigate("/login")} />
          )}
          {user && <AiOutlineLogout onClick={() => navigate("/")} />}
          {darkTheme ? (
            <FiMoon
              fill="#ffce45"
              stroke="#ffce45"
              onClick={() => setDarkTheme(!darkTheme)}
            />
          ) : (
            <BsSun onClick={() => setDarkTheme(!darkTheme)} />
          )}
        </div>
      </div>
    </TopbarContainer>
  );
}

const TopbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  background: rgb(10, 16, 22, 0.5);
  backdrop-filter: blur(8px);
  .container {
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
    }
    .right {
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        font-size: 18px;
        padding: 8px;
        border-radius: 8px;
        color: var(--textLight);
        background-color: rgba(255, 255, 255, 0.05);
        cursor: pointer;
      }
    }
  }
`;

export default Topbar;
