import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.94.252.36/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;