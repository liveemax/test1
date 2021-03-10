import {weather} from "../../type/type";

export const setCurrentListCity=(currentListCity:Array<any>,indexUpdate:number,weather:weather):Array<any>=>{
    if(indexUpdate!==404) {
        currentListCity[indexUpdate]=weather
    }
    else{
        console.log("error in setCurrentListCity")
    }
    return currentListCity
}