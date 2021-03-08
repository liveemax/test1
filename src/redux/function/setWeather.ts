import {weather} from "../../type/type";

export const setWeather=(weatherData:any)=>{
    const weather:weather= {
        name:weatherData.data.name,
        temp:weatherData.data.main.temp-273,
        humidity:weatherData.data.main.humidity,
        pressure:weatherData.data.main.pressure,
        wind:weatherData.data.wind,
        time:Date.now()
    }

    return weather
}