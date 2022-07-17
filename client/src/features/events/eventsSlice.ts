import {createSlice, createAsyncThunk, PayloadActionCreator} from "@reduxjs/toolkit";
import axios from "../../config/axios"


// Slice and State
const initialState: EventsStateInterface = {
    allEvents: {
        data: [],
        error: false,
        success: false,
        loading: false,
        message: ""
    },
    upcomingEvents: {
        data: [],
        error: false,
        success: false,
        loading: false,
        message: ""
    },
    upcomingEventsList: {
        data: [],
        error: false,
        success: false,
        loading: false,
        message: ""

    },
    exploreEventsList: {
        data: [],
        error: false,
        success: false,
        loading: false,
        message: ""

    },
}

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        resetAllEvents: (state) => {
            // state.data.allEvents = [];
            // state.allEventsStatus = "idle"
            // state.error = ""
        }
    },
    extraReducers: (builder) => {
        builder
            // All Events
            .addCase(getAllEvents.pending, (state) => {
                state.allEvents.loading = true;
            })
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.allEvents.loading = false;
                state.allEvents.success = true;
                state.allEvents.data = action.payload
            })
            .addCase(getAllEvents.rejected, (state, action: any) => {
                state.allEvents.error = true;
                state.allEvents.message = action.payload
                state.allEvents.success = false
            })
            // Events page 3 all event call
            .addCase(getAllUpcomingEvents.pending, (state) => {
                state.upcomingEvents.loading = true;
            })
            .addCase(getAllUpcomingEvents.fulfilled, (state, action) => {
                state.upcomingEvents.loading = false
                state.upcomingEvents.success = true
                state.upcomingEvents.data = action.payload;
            })
            .addCase(getAllUpcomingEvents.rejected, (state, action: any) => {
                state.upcomingEvents.loading = false
                state.upcomingEvents.error = true
                state.upcomingEvents.message = action.payload
            })
            .addCase(getUpcomingEventsList.pending, (state) => {
                state.upcomingEventsList.loading = true;
            })
            .addCase(getUpcomingEventsList.fulfilled, (state, action) => {
                state.upcomingEventsList.loading = false
                state.upcomingEventsList.success = true
                state.upcomingEventsList.data = action.payload;
            })
            .addCase(getUpcomingEventsList.rejected, (state, action: any) => {
                state.upcomingEventsList.loading = false
                state.upcomingEventsList.error = true
                state.upcomingEventsList.message = action.payload
            })
            // Events page 3 upcomming event call
            .addCase(getExploreEventsList.pending, (state) => {
                state.exploreEventsList.loading = true;

            })
            .addCase(getExploreEventsList.fulfilled, (state, action) => {
                state.exploreEventsList.loading = false;
                state.exploreEventsList.success = true;
                state.exploreEventsList.data = action.payload;
            })
            .addCase(getExploreEventsList.rejected, (state, action: any) => {
                state.exploreEventsList.loading = false;
                state.exploreEventsList.error = true;
                state.exploreEventsList.message = action.payload;
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


export const getAllUpcomingEvents = createAsyncThunk("events/getAllUpcommingEventsList", async (limit: number, thunkAPI) => {
    try {
        const response = await axios.get("events/upcomming-events")

        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }

})


// !TODO: Limit api call
export const getExploreEventsList = createAsyncThunk("events/getExploreEventsList", async (limit: number, thunkAPI) => {
    try {
        const response = await axios.get("/events", {params: {limit}})
        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
});


export const getUpcomingEventsList = createAsyncThunk("events/getUpcommingEventsList", async (limit: number, thunkAPI) => {
    try {
        const response = await axios.get("events/upcoming-events", {params: {limit}})
        return response.data
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
});


export const {resetAllEvents} = eventsSlice.actions
export default eventsSlice.reducer