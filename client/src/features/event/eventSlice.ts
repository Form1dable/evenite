import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import axios from "../../config/axios"

const initialState: EventStateInterface = {
    data: {
        event: {},
    },
    loading: false,
    error: false,
    success: false,
    message: ""

}

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        reset: (state) => {
            state.data.event = {};
            state.loading = false;
            state.success = false;
            state.error = false
            state.message = ""
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getEvent.pending, (state) => {
                state.loading = true;
            })
            .addCase(getEvent.fulfilled, (state, action) => {
                state.loading = false;
                state.data.event = action.payload
            })
            .addCase(getEvent.rejected, (state, action: any) => {
                state.loading = false;
                state.success = false;
                state.error = true;
                state.message = action.payload
            })
    }

})

export const getEvent = createAsyncThunk("event/getEvent", async (eventId: number, thunkAPI) => {
    try {
        thunkAPI.dispatch(eventSlice.actions.reset())
        const response = await axios.get(`events/event/${eventId}`)
        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }

})

export const eventAction = eventSlice.actions
export default eventSlice.reducer
