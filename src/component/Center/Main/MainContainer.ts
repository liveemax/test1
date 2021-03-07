import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Main} from "./Main";
import {observeCity} from "./../../../redux/headerReducer";


export type MainProps = ReturnType<typeof mapStateToProps>
export type MainDispatch={
    observeCity:(submit:string)=>void
}

let mapStateToProps = (store: AppStateType) => ({
    weather: store.header.weather
})

export const MainContainer = connect(mapStateToProps,{observeCity})(Main);