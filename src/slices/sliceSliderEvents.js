import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    slidesList: null,
    offset: 0,
    width: 0,
    activeSlide: null,
    timingF: 'linear',
    duration: 0.3,
}

const sliderEvents = createSlice({
    name: 'sliderEvents',
    initialState,
    reducers: {
        next: (state, action) => {
            const {payload} = action;
            state.offset = payload.width;
        },
        startData: (state, {payload}) => {
            state.width = payload.width;
        },
        changeActiveSlide: (state, {payload}) => {
            state.activeSlide = payload.id;
        },
        resetOffset: state => {
            state.offset = 0;
        },
    }
})

export default sliderEvents.reducer;
export const { next, startData, changeActiveSlide, resetOffset } = sliderEvents.actions;