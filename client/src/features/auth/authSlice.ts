import {createSlice, createAsyncThunk, PayloadAction, isAsyncThunkAction} from "@reduxjs/toolkit";
import axios from "../../config/axios"


// If there is a token configure axios to put the token in axios and set the state


// Handle token after reload
const token = JSON.parse(localStorage.getItem("token"))


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
            state.token.access = action.payload.access
            state.token.refresh = action.payload.refresh
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
            .addCase(getToken.fulfilled, (state, action) => {
                state.token.loading = false;
                state.token.success = true;
                state.token.access = action.payload.access
                state.token.refresh = action.payload.refresh
                state.token.authenticated = true;
            })
            .addCase(getToken.rejected, (state, action: any) => {
                state.token.loading = false;
                state.token.error = true;
                state.token.message = action.payload
            })
        // .addCase(getProfile.pending, (state) => {
        //
        // })
        // .addCase(getProfile.fulfilled, (state, action) => {
        //     state.user.id = action.payload.id
        //     state.user.username = action.payload.username
        //     state.user.email = action.payload.email
        // })
        // .addCase(getProfile.rejected, (state) => {
        //
        // })
    }
})


// Actions

interface RegisterAccountPayloadInterface {
    email: string;
    username: string;
    password: string;
}


// Authentication
export const registerAccount = createAsyncThunk("auth/register", async (payload: RegisterAccountPayloadInterface, thunkAPI) => {
    try {
        const response = await axios.post("users/register", payload)
        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        thunkAPI.rejectWithValue(message)
    }
})

// Only for login
export const getToken = createAsyncThunk("auth/getToken", async (payload: { email: string, password: string }, thunkAPI) => {
    try {
        const response = await axios.post("api/token", payload)
        const data = await response.data

        console.log(data)

        localStorage.setItem("token", JSON.stringify(data))

        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        thunkAPI.rejectWithValue(message)
    }
})


// For logout
export const logout = createAsyncThunk("auth/logout", (arg, thunkAPI) => {
    localStorage.removeItem("token")
    thunkAPI.dispatch(resetToken())
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

        thunkAPI.rejectWithValue(message)
    }

})

export const {registerReset, setToken, resetToken} = authSlice.actions
export default authSlice.reducer