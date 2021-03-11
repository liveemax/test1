import React, {Component} from "react";
import { AsideContainer} from "./Asside/Aside";
import classes from "./center.module.scss"
import { MainContainer } from "./Main/MainContainer";


export class Center extends Component<{}> {

    render() {
        return (
            <div className={` pt-4 pl-0 justify-content-end ${classes.root}`}>
                <div><MainContainer/></div>
                <div className={"col-xl-3 col-lg-4 col-sm-6 col-12 d-flex "}><AsideContainer/></div>
            </div>

        )
    }
}


