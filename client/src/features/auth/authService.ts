import axios from "axios"


const API_URL = "/api/users"

interface RegisterData {
    email: string;
    username: string;
    password1: string;
    password2: string;
}

const register = async (data: RegisterData) => {
    const response = await axios.post(API_URL, data)

    if (response.data) {
        localStorage.setItem("token", response.data)
    }

    return response.data
}