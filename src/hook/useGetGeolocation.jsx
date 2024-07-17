import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGeo } from "../slices/sliceGeolocation";

export default function useGetGeolocation() {
    const dispatch = useDispatch();

    useEffect( () => {

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( position => {
                const {longitude, latitude} = position.coords;
                dispatch(saveGeo({longitude, latitude}));
            } )
        }

    }, []);
}