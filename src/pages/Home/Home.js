import { useHistory } from "react-router";
import api from "../../services/api";

function Home() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    history.push("/");
  };

  const handleHitAPI = async () => {
    try {
      const response = await api.get("/auth/workers/", {
        headers: {
          moises: "goEmqjjC.aO79X8z9Ajur0mG6lgezmRpRaDwVOl9H",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      alert("Token válido");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Você foi logado com sucesso!</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleHitAPI}>Hit API</button>
    </div>
  );
}

export default Home;
