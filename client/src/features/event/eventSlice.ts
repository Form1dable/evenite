import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"

interface State {
    data: {},
    status: "loading" | "success" | "error" | "idle";
    error: string;
}

const initialState: State = {
    data: {},
    status: "idle",
    error: ""
}

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        reset: (state) => {
            state.data = {};
            state.status = "idle";
            state.error = ""
        }
    }

})

export const eventAction = eventSlice.actions
export default eventSlice.reducer
