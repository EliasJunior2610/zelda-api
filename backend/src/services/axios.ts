import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const zeldaApi = axios.create({
    baseURL: 'https://zelda.fanapis.com/api',
    timeout: 9000,
});

export {
    zeldaApi,
};