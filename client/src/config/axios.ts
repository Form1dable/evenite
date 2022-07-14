import axios from "axios"


const instance = axios.create({
    baseURL: "http://localhost:8000",
})

export default instance

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;