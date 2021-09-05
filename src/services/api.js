import axios from "axios";

const api = axios.create({
  baseURL: "https://abastecendo.com.br",
  headers: {
    moises: "goEmqjjC.aO79X8z9Ajur0mG6lgezmRpRaDwVOl9H",
    // Authorization: localStorage.getItem("access_token")
    //   ? "Bearer " + localStorage.getItem("access_token")
    //   : null,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      alert("Token expirado");
      localStorage.removeItem("access_token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default api;
