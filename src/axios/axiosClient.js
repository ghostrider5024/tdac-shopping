import axios from "axios";

const axiosInstance = axios.create({
     baseURL: 'http://manhdat-001-site1.etempurl.com/api/',
    //baseURL: 'https://localhost:7284/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance;