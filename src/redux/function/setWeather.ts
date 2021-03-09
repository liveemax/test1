import {weather} from "../../type/type";
import {findCurrentIndex} from "./findCityIndex";

export const setWeather = (weatherData: any) => {
    const weather: weather = {
        name: weatherData.data.name,
        temp: weatherData.data.main.temp - 273,
        humidity: weatherData.data.main.humidity,
        pressure: weatherData.data.main.pressure,
        wind: weatherData.data.wind,
        time: Date.now()
    }
        //update
    let indexUpdate=findCurrentIndex(weather)

    if(indexUpdate!==404) {
        localStorage.setItem(`${indexUpdate}`, JSON.stringify(weather))
        return weather
    }
        //setLocalStorage
    localStorage.setItem(`${localStorage.getItem(`isCity`)?localStorage.getItem(`isCity`):"0"}`, JSON.stringify(weather))
    if (localStorage.getItem(`isCity`)) {
            localStorage.setItem(`isCity`, String(Number(localStorage.getItem("isCity")!) + 1))
            localStorage.setItem("cityList",localStorage.getItem("cityList")!+`,${weather.name}`)
        }
        else {
            localStorage.setItem(`isCity`, "1")
            localStorage.setItem("cityList",`,${weather.name}`)
        }
    return weather
}