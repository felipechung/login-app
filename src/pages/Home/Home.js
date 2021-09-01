import { useHistory } from "react-router";
import api from "../../services/api";

function Home() {
  const history = useHistory();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    history.push("/");
  }

  function handleHitAPI(e) {
    e.preventDefault();
    api
      .get("/auth/workers/")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div>
      <h1>Você foi logado com sucesso!</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleHitAPI}>Hit API</button>
    </div>
  );
}

export default Home;
