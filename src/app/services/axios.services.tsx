import axios from 'axios';

let baseUrl = null;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8001';
} else {
    baseUrl = 'http://battleship.smartass.io';
}

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        token: localStorage.getItem('token')
    }
});

export default api;