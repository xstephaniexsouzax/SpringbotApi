

import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:8080/usuarios',
    timeout: 5000
})

export default api;