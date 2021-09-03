import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { parseJwt } from "./utils";

//Route for Already Loggedin users
//Access to route depends on the access token
//If there is a valid access token, show current Route
//if no valid token, redirect to login page
function LoggedInRoute({ ...rest }) {
  const accessToken = localStorage.getItem("access_token");

  let isTokenValid;

  //Token Validation using a function to decode the token and get the expiration date(time)
  //parseJwt returns everything from payload but I only need the expiration date
  if (accessToken) {
    const tokenExpiration = parseJwt(accessToken).exp; //exp in seconds since Unix epoch
    isTokenValid = Date.now() < tokenExpiration * 1000; //1000 to convert to the same base
  } else {
    isTokenValid = false; //if no access token, token is not valid
  }

  if (!isTokenValid) {
    //if token is not valid, redirect to login
    alert("Token inválido");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

//Route for Loggedout Users.
//If there is no token, go to login page
function LoggedOutRoute({ ...rest }) {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    return <Redirect to="/home" />;
  }
  return <Route {...rest} />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <LoggedOutRoute exact path="/" component={Login} />
          <LoggedInRoute exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
