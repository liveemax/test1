import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import classes from "./city.module.scss"


export class City extends Component<{}> {

    render() {
        return (
                <Card className={`col-sm-12 mb-1 col-lg-6 mb-6 d-flex p-0 ${classes.root}`}>
                    <Card.Header >Город:</Card.Header>
                    <Card.Body className={"d-flex  flex-column text-center"}>
                        <Card.Title>Температура:</Card.Title>
                        <Card.Title>Влажность</Card.Title>
                        <Card.Title>Атмосферное давление</Card.Title>
                        <Card.Title>СИЛА и направление ветра</Card.Title>
                        <Card.Title>Последнее обновление данных </Card.Title>
                        <div className={"d-flex justify-content-center"}>
                            <Button variant="success" className={"mr-1"}>Удалить</Button>
                            <Button variant="danger">Обновить</Button>
                        </div>
                    </Card.Body>
                </Card>
        )
    }
}


