import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Main} from "./Main";
import {addCity, remCity, setCurrentCity} from "./../../../redux/headerReducer";


export type MainProps = ReturnType<typeof mapStateToProps>
export type MainDispatch={
    addCity:(submit:string)=>void,
    setCurrentCity:()=>void,
    remCity:(ind:number)=>void
}

let mapStateToProps = (store: AppStateType) => ({
    weather: store.header.weather,
    currentListCity: store.header.currentListCity,
    error:store.header.error
})

export const MainContainer = connect(mapStateToProps,{addCity,setCurrentCity,remCity})(Main);