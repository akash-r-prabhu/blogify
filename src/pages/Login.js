import React from "react";
import "../css/Login.css";
import firebase from "../database/firebase";
import Button from "@mui/material/Button";
import { auth, provider } from "../database/firebase";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import logo from "../blogify_logo.png";
function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes?.SET_USER,
          user: result?.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signInAsGuest = () => {
    dispatch({
      type: actionTypes?.SET_USER,
      user: { displayName: "Guest" },
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} />
        <h1>Sign in to Blogify</h1>
        <Button className="loginButton" onClick={signIn}>
          Sign in with Google
        </Button>
        <br />
        <Button className="button__guest" onClick={signInAsGuest}>
          Continue as Guest
        </Button>
      </div>
    </div>
  );
}

export default Login;
