import React, {Component} from "react";
import classes from "./header.module.scss"
import {Button, Form} from "react-bootstrap";


export class Header extends Component<{}> {
    render() {
        return (
            <div className={"container-fluid"}>
                <header>
                    <Form className={"d-flex pt-2 align-items-center"+" "+classes.form}>
                        <Form.Control placeholder="Enter city"/>
                        <Button variant="primary">Set</Button>
                        <Button variant="outline-secondary p-1">Update every:</Button>
                    </Form>
                </header>
            </div>
        )
    }
}


