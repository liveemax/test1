import React, {Component} from "react";
import {City} from "./City/City";

export class Main extends Component<{}> {

    render() {
        return (
            <main className={"d-flex flex-wrap container-fluid "}>
                <City/>
                <City/>
                <City/>
                <City/>
                <City/>
            </main>
        )
    }
}


