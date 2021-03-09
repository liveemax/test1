import {weather} from "../../type/type";

export const findCurrentIndex=(weather:weather):number=>{
    for(let i=0;i<Number(localStorage.getItem(`isCity`));i++){
        if(localStorage.getItem(`${i}`)&&localStorage.getItem(`${i}`)!.split(weather.name).length>1){
            return i
        }
    }
        return (404)
}
