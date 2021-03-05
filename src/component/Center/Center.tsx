import React, {Component} from "react";
import {Aside} from "./Asside/Aside";
import {Main} from "./Main/Main";
import classes from "./center.module.scss"


export class Center extends Component<{}> {
    render() {
        return (
            <div className={`container pt-4 pl-0 d-flex ${classes.root}`}>
                <div className={"col-lg-3 col-sm-4 col-12 d-flex justify-content-center m-1 border"}><Aside/></div>
                <div><Main/></div>
            </div>

        )
    }
}


