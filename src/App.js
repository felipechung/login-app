import "./App.css";
import { useContext } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import { Context, AuthProvider } from "./Context/AuthContext";

function PrivateRoute() {
  const { authenticated } = useContext(Context);
  if (!authenticated) return <Route />;
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
