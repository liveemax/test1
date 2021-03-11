import {weather} from "../../type/type";
import {findCurrentIndex} from "./findCityIndex";
import {setWidget} from "./setWidget";

export const setWeather = (weatherData: any) => {
    const weather: weather = {
        name: weatherData.data.name,
        temp: weatherData.data.main.temp - 273,
        humidity: weatherData.data.main.humidity,
        pressure: weatherData.data.main.pressure,
        wind: weatherData.data.wind,
        time: Date.now()
    }
    //widget
    if (!localStorage.getItem("isCity")){
        localStorage.setItem("max", `${weather.temp.toFixed(2)} ${weather.name}`)
        localStorage.setItem("min", `${weather.temp.toFixed(2)} ${weather.name} `)
    }
    else if(localStorage.getItem("max")!.split(`${weather.name}`).length>1)
        localStorage.setItem("max", `${weather.temp.toFixed(2)} ${weather.name}`)
    else if(localStorage.getItem("min")!.split(`${weather.name}`).length>1)
        localStorage.setItem("min", `${weather.temp.toFixed(2)} ${weather.name} `)
    else if ((Number(localStorage.getItem("max")!.split(" ")[0]) < weather.temp ||
        weather.temp < Number(localStorage.getItem("min")!.split(" ")[0]))) {
        setWidget(weather)
    }
    let indexUpdate = findCurrentIndex(weather)
    //update
    if (indexUpdate !== 404) {
        localStorage.setItem(`${indexUpdate}`, JSON.stringify(weather))
        return weather
    }
    //setLocalStorage
    localStorage.setItem(`${localStorage.getItem(`isCity`) ? localStorage.getItem(`isCity`) : "0"}`, JSON.stringify(weather))
    if (localStorage.getItem(`isCity`)) {
        localStorage.setItem(`isCity`, String(Number(localStorage.getItem("isCity")!) + 1))
        localStorage.setItem("cityList", localStorage.getItem("cityList")! + `,${weather.name}`)
    } else {
        localStorage.setItem(`isCity`, "1")
        localStorage.setItem("cityList", `,${weather.name}`)
    }
    return weather
}