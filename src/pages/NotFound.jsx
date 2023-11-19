import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <div className="container">
        <div className="error">404</div>
        <div className="message">
          The page you are looking for does not exist.
        </div>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 180px);
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .error {
      font-size: 126px;
      font-weight: 900;
    }
    .message {
      font-size: 18px;
    }
    button {
      border-radius: 25px;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      background-color: #ffce45;
    }
  }
`;

export default NotFound;
