import axios from "axios";

const api = axios.create({
    baseURL: "https://642f360cc26d69edc8789f89.mockapi.io/"
});

export default api;