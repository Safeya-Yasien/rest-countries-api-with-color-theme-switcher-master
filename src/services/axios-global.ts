import axios from "axios";

const apiUrl =
  import.meta.env.VITE_API_URL || "https://restcountries.com/v3.1/";

axios.defaults.baseURL = apiUrl;

export default axios;
