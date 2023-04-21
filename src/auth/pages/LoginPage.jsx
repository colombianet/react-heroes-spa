import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext( AuthContext );
  const lastpath = localStorage.getItem('lastpath') || '/';

  const onLogin = () => {
    login('Oscar Pérez');
    navigate(lastpath, {
      replace: true
    });
  };

  return (
    <>
      <div className="container mt-2">
        <h1>loginPage</h1>
        <hr />
        <button className="btn btn-primary" onClick={ onLogin }>Login</button>
      </div>
    </>
  )
}
