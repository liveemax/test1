import {weather} from "../../type/type";

export const setWidget=(weather:weather)=> {
    let temp=weather.temp.toFixed(2)
        if(Number(localStorage.getItem("max")!.split(" ")[0])<Number(temp))
            localStorage.setItem(`max`,temp+" "+weather.name)
        else if(Number(localStorage.getItem("min")!.split(" ")[0])>Number(temp))
            localStorage.setItem(`min`,temp+" "+weather.name)
}