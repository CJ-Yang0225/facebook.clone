import React from "react";

// Styled
import { LoginWrapper } from "./Login.styles";

// Images
import fbLogo from "../../images/f_logo_RGB-Hex-Blue_512.png";
import fbTextLogo from "../../images/Facebook-Logo.wine.png";

// Firebase
import { auth, googleProvider } from "../../firebase/config";

// Context
import { useUserContext } from "../ContextProvider/ContextProvider";

const Login: React.FC = () => {
  const [state, dispatch] = useUserContext();

  const signIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <LoginWrapper>
      <div className="login__brand">
        <img className="login__logo" src={fbLogo} alt="Facebook Logo" />
        <img
          className="login__textLogo"
          src={fbTextLogo}
          alt="Facebook Logo.wine"
        />
      </div>
      <button type="submit" className="login__signIn" onClick={signIn}>
        Sign In
      </button>
    </LoginWrapper>
  );
};

export default Login;
