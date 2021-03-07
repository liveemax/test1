import React, {Component} from "react";
import { AsideContainer} from "./Asside/Aside";
import classes from "./center.module.scss"
import { MainContainer } from "./Main/MainContainer";


export class Center extends Component<{}> {
    render() {
        return (
            <div className={`container pt-4 pl-0 d-flex flex-row-reverse ${classes.root}`}>
                <div><MainContainer/></div>
                <div className={"col-lg-3 col-sm-4 col-12 d-flex justify-content-center m-1 border"}><AsideContainer/></div>
            </div>

        )
    }
}


