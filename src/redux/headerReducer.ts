import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {setCity} from "./function/setCity";
import {toolTipAPI} from "../api/apiCity/header-cityApi";
import {whetherAPI} from "../api/apiWeather/header-weatherApi";
import {setWeather} from "./function/setWeather";
import {weather} from "../type/type";
import {setCurrentListCity} from "./function/setCurrentListCity";
import {findCurrentIndex} from "./function/findCityIndex";
import {setLastListCity} from "./function/setLastListCity";
import {remListCity} from "./function/remListCity";

let initialState = {
    xy: null as null | Array<number>,
    tooltip: null as null | Array<string>,
    weather: {} as weather,
    currentListCity: [] as Array<any>,
}

export const headerReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SELECT_HEADER_TOOLTIP":
            return {
                ...state,
                tooltip:action.tooltip,
                xy:action.tooltip
            }
        case "SELECT_HEADER_WEATHER":
            let indexUpdate=findCurrentIndex(action.weather)
            let list=setCurrentListCity(JSON.parse(JSON.stringify(state.currentListCity)),indexUpdate,action.weather)
            return {
                ...state,
                weather:action.weather,
                currentListCity:list
            }
        case "SELECT_CURRENT_CITES":
            let lastList=setLastListCity()
            return {
                ...state,
                currentListCity:lastList
            }
        case "SELECT_REM_CITY":
            let currentListCity=remListCity(JSON.parse(JSON.stringify(state.currentListCity)),action.ind)
            debugger

            return {
                ...state,
                currentListCity:currentListCity
            }
        default:
            return state;
    }
}

export const actions = {
    toolTipAC: (tooltip: null|Array<string>,xy:null|Array<number>) => ({type: 'SELECT_HEADER_TOOLTIP', tooltip,xy} as any),
    addCityAC: (weather:weather) => ({type: 'SELECT_HEADER_WEATHER', weather} as const),
    currentCityAC: () => ({type: 'SELECT_CURRENT_CITES'} as const),
    remCityAC: (ind:number) => ({type: 'SELECT_REM_CITY',ind} as const),
}

export const setCurrentCity = () => (dispatch:ActionsType) => {
    localStorage.setItem("max","-273  ")
    localStorage.setItem("min","273  ")
    dispatch(actions.currentCityAC())
}
export const setToolTip = (nameStartsWith:string): ThunkType => async (dispatch) => {
    if(nameStartsWith.length>2) {
        try {
            const data = await toolTipAPI.get(nameStartsWith)
            let {city,xy,...cityXy}=setCity(data)
            dispatch(actions.toolTipAC(city,xy))
        }
        catch (e){
            console.log("error to get tooltip")
        }
    }
    else dispatch(actions.toolTipAC(null,null))
}
export const addCity = (submit:string): ThunkType => async (dispatch) => {
        let weatherData
        try {
            weatherData = await whetherAPI.get(submit)
            const weather = setWeather(weatherData)
            dispatch(actions.addCityAC(weather))
        }
        catch (e){
            alert("город не найден")
        }
    }
export const remCity = (ind:number) =>  (dispatch:ActionsType) => {
    dispatch(actions.remCityAC(ind))
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
