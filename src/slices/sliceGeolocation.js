import { createSlice } from "@reduxjs/toolkit";

const initial = {
    city: null,
    longi: null,
    lati: null,
}

const geoSlice = createSlice({
    name: 'geoSlice',
    initialState: initial,
    reducers: {
        saveGeo: (state, {payload}) => {
            const {latitude, longitude} = payload;

            state.longi = longitude;
            state.lati = latitude;

            state.city = 'Симферополь';
        }
    }
})

export default geoSlice.reducer;
export const { saveGeo } = geoSlice.actions;