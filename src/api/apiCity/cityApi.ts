import axios from "axios";

export const cityApi = axios.create({
    baseURL: 'http://api.geonames.org',
    timeout: 3000,
    }
);

