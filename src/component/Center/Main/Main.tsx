import React, {Component} from "react";
import {City} from "./City/City";
import classes from "./main.module.scss"


export class Main extends Component<{}> {

    render() {
        return (
            <main className={`d-flex flex-wrap container-fluid p-0 ${classes.root}`}>
                <City/>
                <City/>
                <City/>
                <City/>
                <City/>
            </main>
        )
    }
}


