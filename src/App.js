import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Routes from "./components/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
