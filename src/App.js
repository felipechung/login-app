import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { parseJwt } from "./utils";

function LoggedRoute({ ...rest }) {
  const accessToken = localStorage.getItem("access_token");
  let isTokenValid;

  if (accessToken) {
    const tokenExpiration = parseJwt(accessToken).exp;
    isTokenValid = Date.now() < tokenExpiration * 1000;
  } else {
    isTokenValid = false;
  }

  if (!isTokenValid) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

function UnloggedRoute({ ...rest }) {
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
          <UnloggedRoute exact path="/" component={Login} />
          <LoggedRoute exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
