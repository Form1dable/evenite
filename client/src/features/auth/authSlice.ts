import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

// If there is a token configure axios to put the token in axios and set the state

interface State {
    access: null | string;
    refresh: null | string;
    status: "loading" | "success" | "error" | "idle"
    error: null | string;

}

const initialState: State = {
    access: null,
    refresh: null,
    status: "idle",
    error: "",
}

// Actions
export const register = createAsyncThunk("auth/register", async (data, thunkAPI) => {
    try {
        // Return a promise

    } catch {

    }
})


// Reducer
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.access = null;
            state.refresh = null;
            state.error = null;
            state.status = "idle";
        }
    },
    extraReducers: () => {

    }
})


export const authAction = authSlice.actions
export default authSlice.reducer