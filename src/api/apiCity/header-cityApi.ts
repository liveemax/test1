import {cityApi} from "./cityApi";
import * as https from "https";

let root = "liveemax"
let maxRows = "3"
let pagination = "3"
let population = "cities5000"
let lang = "ru"
let searchLang = "ru"
let kindOfSearch = "P"

export const toolTipAPI = {
    get(name_startsWith: string) {
        return cityApi.get(`searchJSON?username=${root}&maxRows=${maxRows}&name_startsWith=${name_startsWith}
        &maxRows=${pagination}&cities=${population}&lang=${lang}&searchLang=${searchLang}&featureClass=${kindOfSearch}`).then(res => res.data)
    }
}
