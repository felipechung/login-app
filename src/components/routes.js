import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

//Route for Already Logged in users
//Access to route depends on the access token
//If there is a valid access token, show current Route
//if no valid token, redirect to login page
function LoggedInRoute({ ...rest }) {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    //if token is not valid, redirect to login
    alert("Token inválido");
    localStorage.removeItem("access_token");

    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

//Route for Logged out Users.
//If there is no token, go to login page
function LoggedOutRoute({ ...rest }) {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    return <Redirect to="/home" />;
  }
  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <LoggedOutRoute exact path="/" component={Login} />
      <LoggedInRoute exact path="/home" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}
