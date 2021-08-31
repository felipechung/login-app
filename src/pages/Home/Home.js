import { useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../../context/AuthContext";

function Home() {
  const history = useHistory();
  const { setAuthenticated } = useContext(Context);
  function handleLogout(e) {
    e.preventDefault();
    setAuthenticated(false);
    history.push("/");
  }
  return (
    <div>
      <h1>Você foi logado com sucesso!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
