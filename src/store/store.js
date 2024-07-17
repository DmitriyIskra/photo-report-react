import { configureStore } from "@reduxjs/toolkit";

import geoSlice from '../slices/sliceGeolocation';
import sliceEvents from "../slices/sliceEvents";
import sliceSliderEvents from "../slices/sliceSliderEvents";

const store = configureStore({
    reducer: {
        location: geoSlice,
        events: sliceEvents,
        sliderEvents: sliceSliderEvents,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;