import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {setCity} from "./function/setCity";
import {toolTipAPI} from "../api/apiCity/header-cityApi";
import {whetherAPI} from "../api/apiWeather/header-weatherApi";
import {setWeather} from "./function/setWeather";
import {weather} from "../type/type";

let initialState = {
    xy:null as null|Array<number>,
    tooltip:null as null|Array<string>,
    weather: {} as weather,
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
            return {
                ...state,
                weather:action.weather,
            }
        default:
            return state;
    }
}

export const actions = {
    toolTipAC: (tooltip: null|Array<string>,xy:null|Array<number>) => ({type: 'SELECT_HEADER_TOOLTIP', tooltip,xy} as any),
    observeCityAC: (weather:weather) => ({type: 'SELECT_HEADER_WEATHER', weather} as const),
}

export const setToolTip = (nameStartsWith:string): ThunkType => async (dispatch) => {
    if(nameStartsWith.length>2) {
        const data = await toolTipAPI.get(nameStartsWith)
        let {city,xy,...cityXy}=setCity(data)
        dispatch(actions.toolTipAC(city,xy))
    }
    else dispatch(actions.toolTipAC(null,null))
}
export const observeCity = (submit:string): ThunkType => async (dispatch) => {
    const weatherData = await whetherAPI.get(submit)
    const weather=setWeather(weatherData.data)
    dispatch(actions.observeCityAC(weather))
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
