import {createSlice, createAsyncThunk, PayloadActionCreator} from "@reduxjs/toolkit";
import axios from "../../config/axios"


// Slice and State
const initialState: EventsStateInterface = {
    data: {
        allEvents: [],
        upcommingEventsList: [],
        allUpcommingsEvents: [],
        exploreEventsList: []
    },
    allEventsStatus: "idle",
    upcommingEventsListStatus: "idle",
    allUpcommingEventsStatus: "idle",
    exploreEventsListStatus: "idle",
    error: ""
}

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        resetAllEvents: (state) => {
            state.data.allEvents = [];
            state.allEventsStatus = "idle"
            state.error = ""
        }
    },
    extraReducers: (builder) => {
        builder
            // All Events
            .addCase(getAllEvents.pending, (state) => {
                state.allEventsStatus = "loading";
            })
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.allEventsStatus = "success";
                state.data.allEvents = action.payload
            })
            .addCase(getAllEvents.rejected, (state, action: any) => {
                state.allEventsStatus = "error";
                state.error = action.payload;
                state.data.allEvents = []
            })
            // Events page 3 all event call
            .addCase(getExploreEventsList.pending, (state) => {
                state.exploreEventsListStatus = "loading"

            })
            .addCase(getExploreEventsList.fulfilled, (state, action) => {
                state.exploreEventsListStatus = "success";
                state.data.exploreEventsList = action.payload;
            })
            .addCase(getExploreEventsList.rejected, (state, action: any) => {
                state.exploreEventsListStatus = "error";
                state.error = action.payload
            })
            // Events page 3 upcomming event call
            .addCase(getUpcommingEvenstList.pending, (state) => {
                state.upcommingEventsListStatus = "loading"

            })
            .addCase(getUpcommingEvenstList.fulfilled, (state, action) => {
                state.upcommingEventsListStatus = "success";
                state.data.upcommingEventsList = action.payload;
            })
            .addCase(getUpcommingEvenstList.rejected, (state, action: any) => {
                state.upcommingEventsListStatus = "error";
                state.error = action.payload
            })
            // Upcomming page all upcomming events call
            .addCase(getAllUpcommingEvents.pending, (state) => {
                state.allUpcommingEventsStatus = "loading"

            })
            .addCase(getAllUpcommingEvents.fulfilled, (state, action) => {
                state.allUpcommingEventsStatus = "success";
                state.data.allUpcommingsEvents = action.payload;
            })
            .addCase(getAllUpcommingEvents.rejected, (state, action: any) => {
                state.allUpcommingEventsStatus = "error";
                state.error = action.payload
            })
    }
})

// Extra Reducers
export const getAllEvents = createAsyncThunk("events/getAllEvents", async (arg, thunkAPI) => {
    try {
        const response = await axios.get("/events")
        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const getExploreEventsList = createAsyncThunk("events/getExploreEventsList", async (limit: number, thunkAPI) => {
    try {
        const response = await axios.get("/events", {params: {limit}})
        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
});


export const getUpcommingEvenstList = createAsyncThunk("events/getUpcommingEventsList", async (limit: number, thunkAPI) => {
    try {
        const response = await axios.get("events/upcomming-events", {params: {limit}})

        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllUpcommingEvents = createAsyncThunk("events/getAllUpcommingEventsList", async (args, thunkAPI) => {
    try {
        const response = await axios.get("events/upcomming-events")

        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }

})

export const {resetAllEvents} = eventsSlice.actions
export default eventsSlice.reducer