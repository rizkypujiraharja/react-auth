import axios from 'axios'

const token = localStorage.getItem("token")

const ApiService = axios.create({
    baseURL: 'http://18.139.50.74:8080',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer ' + token,
    },
});

export default ApiService