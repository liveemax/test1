import React, {Component} from "react";
import {Button} from "react-bootstrap";
import classes from "./aside.module.scss"
import {AddCard} from "./AddCard";



export class Aside extends Component<{}> {
    render() {
        return (
            <aside className={`${classes.root} m-1`}>
                <AddCard/>
                <Button className={"m-1"} variant="primary" size="lg" active>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </Button>
            </aside>
        )
    }
}


