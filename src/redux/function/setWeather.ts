import {weather} from "../../type/type";

export const setWeather=(weatherData:any)=>{
    const weather:weather= {
        name:weatherData.name,
        temp:weatherData.main.temp-273,
        humidity:weatherData.main.humidity,
        pressure:weatherData.main.pressure,
        wind:weatherData.wind,
        time:Date.now()
    }

    return weather
}