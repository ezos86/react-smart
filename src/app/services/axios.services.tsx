import axios from 'axios';

let base_url = null;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    base_url = 'http://localhost:8001';
} else {
    base_url = 'http://battleship.smartass.io';
}

var api = axios.create({
    baseURL: base_url,
    headers: {
        token: localStorage.getItem('token')
    }
});

export default api;