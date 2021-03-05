import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import classes from "./aside.module.scss"



export class AddCard extends Component<{}> {
    render() {
        return (
            <div>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


