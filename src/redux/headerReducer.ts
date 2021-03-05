import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {authAPI} from "../api/header-api";

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
    debugger

    const data = await authAPI.me(nameStartsWith)
        dispatch(actions.toolTipAC(data))
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
