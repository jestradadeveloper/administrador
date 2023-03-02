
import axios from 'axios';

const admApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`
});
export default admApi;