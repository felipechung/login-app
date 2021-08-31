import axios from "axios";

const api = axios.create({
  baseURL: "https://abastecendo.com.br",
  headers: {
    moises: "goEmqjjC.aO79X8z9Ajur0mG6lgezmRpRaDwVOl9H",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const access_token = localStorage.getItem("access_token");
    if (error.response.status === 401 && access_token) {
      //   localStorage.removeItem("Authorization");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default api;
