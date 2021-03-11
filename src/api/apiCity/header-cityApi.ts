import {cityApi} from "./cityApi";
import axios from "axios";

let root = "liveemax"
let maxRows = "3"
let pagination = "3"
let population = "cities5000"
let lang = "ru"
let searchLang = "ru"
let kindOfSearch = "P"
// creating a cancel token using the CancelToken.source factory
const CancelToken = axios.CancelToken;
export let cancel:any;



export const toolTipAPI = {
    get(name_startsWith: string) {
        return cityApi.get(`searchJSON?username=${root}&maxRows=${maxRows}&name_startsWith=${name_startsWith}&maxRows=${pagination}&cities=${population}&lang=${lang}&searchLang=${searchLang}&featureClass=${kindOfSearch}`,{
            cancelToken: new CancelToken(function executor(c) {
                // An executor function receives a cancel function as a parameter
                cancel = c;
            })
        });
    },
}

