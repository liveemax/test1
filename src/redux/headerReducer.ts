import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {setCity} from "./function/setCity";
import {toolTipAPI} from "../api/apiCity/header-cityApi";

let initialState = {
    tooltip:null as null|Array<string>
}

export const headerReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SELECT_HEADER_TOOLTIP":
            return {
                ...state,
                tooltip:action.tooltip
            }
        default:
            return state;
    }
}

export const actions = {
    toolTipAC: (tooltip: null|Array<string>) => ({type: 'SELECT_HEADER_TOOLTIP', tooltip} as const),
}

export const setToolTip = (nameStartsWith:string): ThunkType => async (dispatch) => {
    if(nameStartsWith.length>2) {
        const data = await toolTipAPI.get(nameStartsWith)
        const city = setCity(data)
        dispatch(actions.toolTipAC(city))
    }
    else dispatch(actions.toolTipAC(null))
    debugger
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
