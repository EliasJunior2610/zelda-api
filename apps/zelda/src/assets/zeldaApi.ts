import axios from "axios";

const zeldaApi = axios.create({
    baseURL: 'https://zelda.fanapis.com/api',
    timeout: 5000,
});

export default zeldaApi;