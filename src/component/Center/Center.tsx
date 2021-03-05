import React, {Component} from "react";
import {Aside} from "./Asside/Aside";
import {Main} from "./Main/Main";

export class Center extends Component<{}> {
    render() {
        return (
            <div className={"container-fluid pt-4 pl-0 d-flex "}>
                <div className={"col-3 d-flex justify-content-center"}><Aside/></div>
                <div><Main/></div>
            </div>

        )
    }
}


