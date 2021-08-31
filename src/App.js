import "./App.css";
import { useContext } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Context, AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function PrivateRoute({ ...rest }) {
  const { authenticated } = useContext(Context);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
