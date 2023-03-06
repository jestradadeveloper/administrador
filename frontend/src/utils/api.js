import axios from "axios";
import Cookies from "js-cookie";

const admApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});

export default admApi;
