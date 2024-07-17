import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEvents = createAsyncThunk(
    "events/fetchEvents",
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch(process.env.REACT_APP_EVENTS);
            
            if(!response.ok) {
                return rejectWithValue('Loading events error!');
            }
            const result = await response.json();

            return result;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)

const initialState = {
    events: null,
    loading: false,
    error: '',
}

const sliceEvents = createSlice({
    name: 'events',
    initialState,
    reducers: {
        saveEvents: (state, action) => {

        },
        setLoading: () => {

        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchEvents.pending, state => {
                state.loading = true;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.events = action.payload;
                state.loading = false;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default sliceEvents.reducer;