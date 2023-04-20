import axios from "axios";

const api = axios.create({
    baseURL: "http://__URL_BASE_DA_SUA_API_AQUI___"
});

export default api;