import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "../../config/axios"

const initialState: EventStateInterface = {
    event: {
        data: {} as EventInterface,
        loading: false,
        error: false,
        success: false,
        message: ""
    },
    createEvent: {
        loading: false,
        error: false,
        success: false,
        message: ""
    },
    updateEvent: {
        loading: false,
        error: false,
        success: false,
        message: ""
    },
    formBuilder: "",
    active: false
}

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        reset: (state) => {
            state.event.data = {} as EventInterface;
            state.event.loading = false;
            state.event.success = false;
            state.event.error = false
            state.event.message = ""
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getEvent.pending, (state) => {
                state.event.loading = true;
            })
            .addCase(getEvent.fulfilled, (state, action) => {
                state.event.loading = false;
                state.event.data = action.payload
            })
            .addCase(getEvent.rejected, (state, action: any) => {
                state.event.loading = false;
                state.event.success = false;
                state.event.error = true;
                state.event.message = action.payload
            })
            .addCase(createEvent.pending, (state) => {
                state.createEvent.loading = true

            })
            .addCase(createEvent.fulfilled, (state) => {
                state.createEvent.loading = false
                state.createEvent.success = true

            })
            .addCase(createEvent.rejected, (state, action: any) => {
                state.createEvent.loading = false
                state.createEvent.error = true
                state.createEvent.message = action.payload

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


export const createEvent = createAsyncThunk("event/createEvent", async (formData: EventInterface, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem("token"))

    const config = {
        headers: {
            "Authorization": `Bearer ${token.access}`
        }
    }

    try {
        const response = await axios.post("/events/create-event", formData, config)
        return response.data

    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})


export const eventAction = eventSlice.actions
export default eventSlice.reducer
