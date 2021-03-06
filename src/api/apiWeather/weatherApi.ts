import axios from "axios";

export const weatherApi = axios.create({
        baseURL: 'http://api.openweathermap.org/data/2.5',
        timeout: 3000,
    }
);

