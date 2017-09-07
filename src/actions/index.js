import axios from 'axios';

const API_KEY = 'd2f09f98123eb05b54a41e9c7b91fc9e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

// action creators always return an action:
export function fetchWeather (city){
    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url); // take url (above) and make a GET request, return promise to variable request

    console.log("Request: ", request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
};