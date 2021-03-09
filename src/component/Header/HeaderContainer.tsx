import {connect} from "react-redux";
import {Header} from "./Header";
import {addCity, setToolTip} from "../../redux/headerReducer";
import {AppStateType} from "../../redux/redux-store";

export type HeaderProps=ReturnType<typeof mapStateToProps>
export type HeaderDispatch= {
    setToolTip: (nameStartsWith:string) => void
    addCity:(submit:string)=>void
}

let mapStateToProps=(store:AppStateType)=>({
    tooltip:store.header.tooltip,
    currentListCity: store.header.currentListCity
})

export const HeaderContainer =connect(mapStateToProps,{setToolTip,addCity})(Header);