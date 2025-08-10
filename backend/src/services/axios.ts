import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const baseURL = process.env.API_URL;

if (!baseURL) {
    throw new Error('A variável de ambiente baseURL não está definida');
}

const zeldaApi = axios.create({
    baseURL,
    timeout: 9000,
});

export {
    zeldaApi,
};