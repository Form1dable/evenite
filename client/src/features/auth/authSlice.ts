import {createSlice, createAsyncThunk, PayloadAction, isAsyncThunkAction} from "@reduxjs/toolkit";
import axios from "../../config/axios"


// If there is a token configure axios to put the token in axios and set the state


// Handle token after reload
const token = JSON.parse(localStorage.getItem("token"))


// Actions

interface RegisterFormDataInterface {
    email: string;
    username: string;
    password: string;
}

interface LoginFormDataInterface {
    email: string;
    password: string;
}


// Authentication
export const registerAccount = createAsyncThunk("auth/register", async (payload: RegisterFormDataInterface, thunkAPI) => {
    try {
        const response = await axios.post("/users/register", payload)

        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// Only for login
export const getToken = createAsyncThunk("auth/getToken", async (formData: LoginFormDataInterface, thunkAPI) => {
    try {
        const response = await axios.post("/api/token", formData)

        if (response.data) {
            localStorage.setItem("token", JSON.stringify(response.data))
        }

        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


// For logout
export const logout = createAsyncThunk("auth/logout", (arg, thunkAPI) => {
    localStorage.removeItem("token")
    return thunkAPI.dispatch(resetToken())
})


// Private


// Public

export const getProfile = createAsyncThunk("auth/getProfile", async (arg, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
        headers: {
            "Authorization": `Bearer ${token.access}`
        }
    }
    try {
        const response = await axios.get("users/user", config)

        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }

})

const initialState: AuthStateInterface = {
    user: {
        id: null,
        username: "",
        email: "",
    },
    token: {
        access: null,
        refresh: null,
        loading: false,
        error: false,
        success: false,
        authenticated: false,
        message: ""
    },
    register: {
        loading: false,
        success: false,
        error: false,
        message: ""
    }
}


if (token) {
    initialState.token.access = token.access
    initialState.token.refresh = token.refresh
    initialState.token.authenticated = true
}

// Reducer
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token.access = action.payload.access;
            state.token.refresh = action.payload.refresh;
            state.token.authenticated = true;
        },
        resetToken: (state) => {
            state.token.access = null
            state.token.refresh = null
            state.token.loading = false;
            state.token.success = false;
            state.token.error = false;
            state.token.authenticated = false;
            state.token.message = ""
        },
        registerReset: (state) => {
            state.register.loading = false;
            state.register.error = false;
            state.register.success = false;
            state.register.message = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAccount.pending, (state) => {
                state.register.loading = true;
            })
            .addCase(registerAccount.fulfilled, (state) => {
                state.register.loading = false;
                state.register.success = true;
            })
            .addCase(registerAccount.rejected, (state, action: any) => {
                state.register.loading = false;
                state.register.error = true;
                state.token.authenticated = true;
                state.register.message = action.payload
            })
            .addCase(getToken.pending, (state) => {
                state.token.loading = true
            })
            .addCase(getToken.fulfilled, (state, action: any) => {
                console.log("Fulfilled Action", action)
                state.token.loading = false;
                state.token.success = true;
                state.token.access = action.payload.access
                state.token.refresh = action.payload.refresh
                state.token.authenticated = true;
            })
            .addCase(getToken.rejected, (state, action: any) => {
                console.log("Rejected Action", action)
                state.token.loading = false;
                state.token.error = true;
                state.token.message = action.payload
            })
    }
})


export const {registerReset, setToken, resetToken} = authSlice.actions
export default authSlice.reducer