import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://api.geonames.org',
    }
);

