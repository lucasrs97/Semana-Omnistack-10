import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.100.100.75:3333',
})

export default api;