import axios from "axios";
import authHeader from "./headers";

const admApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  headers: authHeader(),
});

export default admApi;
