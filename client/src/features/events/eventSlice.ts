import {createSlice, createAsyncThunk, PayloadActionCreator} from "@reduxjs/toolkit";
import axios from "../../config/axios"


// Extra Reducers
export const getEvents = createAsyncThunk("events/getEvents", async (arg, thunkAPI) => {
    try {
        const response = await axios.get("/events")
        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    }
})


// Slice and State

interface State {
    data: [];
    status: "loading" | "error" | "success" | "idle"
    error: string;
}

const initialState: State = {
    data: [],
    status: "idle",
    error: ""
}
const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        reset: (state) => {
            state.data = [];
            state.status = "idle"
            state.error = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEvents.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload
            })
            .addCase(getEvents.rejected, (state, action: any) => {
                state.status = "error";
                state.error = action.payload;
                state.data = []
            })
    }
})


export const {reset} = eventsSlice.actions
export default eventsSlice.reducer