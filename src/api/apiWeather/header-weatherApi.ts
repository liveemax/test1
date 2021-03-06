import {weatherApi} from "./weatherApi";


let API="bfe393d105ed49b7a847cf9f6153eaa3"

export const whetherAPI = {
    get(submit:string) {
        return weatherApi.get(`/weather?q=${submit}&lang=ru&appid=${API}`);
    }
}
