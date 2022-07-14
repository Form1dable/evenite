import {configureStore} from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice"
import eventsReducer from "../features/events/eventSlice"
import eventReducer from "../features/event/eventSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        events: eventsReducer,
        event: eventReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch