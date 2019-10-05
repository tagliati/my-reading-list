import axios from "axios";

const api = axios.create({
  baseURL: "https://manga-parser-api.herokuapp.com/"
});

export default api;
