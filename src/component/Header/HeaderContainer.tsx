import {connect} from "react-redux";
import {Header} from "./Header";
import {observeCity, setToolTip} from "../../redux/headerReducer";
import {AppStateType} from "../../redux/redux-store";

export type HeaderProps=ReturnType<typeof mapStateToProps>
export type HeaderDispatch= {
    setToolTip: (nameStartsWith:string) => void
    observeCity:(submit:string)=>void
}

let mapStateToProps=(store:AppStateType)=>({
    tooltip:store.header.tooltip
})

export const HeaderContainer =connect(mapStateToProps,{setToolTip,observeCity})(Header);