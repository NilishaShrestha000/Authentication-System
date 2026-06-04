import axios from "axios"

const Api = axios.create({
    baseURL: "http://192.168.150.169:3000"

})
Api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default Api;