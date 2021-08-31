import axios from "axios";

const api = axios.create({
  baseURL: "https://abastecendo.com.br",
  headers: {
    moises: "goEmqjjC.aO79X8z9Ajur0mG6lgezmRpRaDwVOl9H",
  },
});

export default api;
