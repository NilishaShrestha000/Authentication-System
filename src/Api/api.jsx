import axios from "axios"

const Api = axios.create({
    baseURL: "http://192.168.150.169:3000/"
});

export default Api;