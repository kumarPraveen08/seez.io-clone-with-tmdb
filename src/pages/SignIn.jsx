import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
  return (
    <LoginContainer>
      <div className="container">
        <h2>Sign In</h2>
        <div className="google">
          <FcGoogle />
          Sign In with Google
        </div>
        <form>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </div>
    </LoginContainer>
  );
}
// ""
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 180px);
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 350px;
    padding: 50px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    h2 {
      font-size: 32px;
      font-weight: 600;
    }
    .google {
      padding: 10px;
      background-color: white;
      border-radius: 5px;
      color: black;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        font-size: 30px;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      input {
        padding: 12px;
        border: none;
        border-radius: 5px;
        font-size: 18px;
      }
      button {
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #f2b01e;
        cursor: pointer;
      }
    }
    span {
      a {
        text-decoration: underline;
      }
    }
  }
`;

export default SignIn;
