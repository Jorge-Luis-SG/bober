import axios from "axios";


const instance = axios.create({
    baseURL: 'https://server-bober.onrender.com/api',
    withCredentials: true
})

export default instance