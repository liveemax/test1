import React, {Component} from "react";
import {Aside} from "../Asside/Aside";
import {Main} from "../Main/Main";

export class Center extends Component<{}> {
    render() {
        return (
            <div>
                <Aside/>
                <Main/>
            </div>

        )
    }
}


