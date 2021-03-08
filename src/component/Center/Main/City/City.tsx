import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import classes from "./city.module.scss"
import {weather} from "./../../../../type/type"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp, faSnowflake, faSun} from '@fortawesome/free-solid-svg-icons'

type CityProps = {
    city: weather,
    index: number,
    del: (ind: number) => void,
    update: (submit: string) => void
}

export class City extends Component<CityProps> {
    componentDidMount() {

    }

    handleOnclickDel() {
        localStorage.removeItem(`${this.props.index}`)
        localStorage.setItem(`isCity`, String(Number(localStorage.getItem("isCity")) - 1))
        localStorage.setItem(`cityList`, localStorage.getItem(`cityList`)!.split(`,${this.props.city.name}`).join(""))
        if (localStorage.getItem(`isCity`) === "0") {
            localStorage.clear()
        }
        this.props.del(this.props.index)

    }

    handleOnclickUp(e:any) {
        this.props.update(this.props.city.name)
    }

    render() {
        if (this.props.city) {
            let time = new Date(this.props.city.time)
            return (
                <Card className={`col-sm-12 mb-1 col-lg-6 mb-6 d-flex p-0 ${classes.root}`}>
                    <Card.Header>Город:{this.props.city.name}</Card.Header>
                    <Card.Body className={"d-flex  flex-column text-center"}>
                        <Card.Title>Температура:{(this.props.city.temp).toFixed(2)
                        }{Number((this.props.city.temp).toFixed(2)
                        ) > 0 ?
                            <FontAwesomeIcon icon={faSun} className={classes.sun} spin/> :
                            <FontAwesomeIcon icon={faSnowflake} className={classes.snow} spin/>
                        }
                        </Card.Title>
                        <Card.Title>Влажность:{this.props.city.humidity}%</Card.Title>
                        <Card.Title>Атмосферное давление:{this.props.city.pressure}</Card.Title>
                        <Card.Title>Сила и направление ветра:{this.props.city.wind.speed}М/С
                            <FontAwesomeIcon icon={faArrowUp} className={classes.arrow}
                                             transform={{rotate: this.props.city.wind.deg}}/>
                        </Card.Title>
                        <Card.Title>Последнее обновление данных:{time.toDateString().split(" ")[2] + " " +
                        time.toDateString().split(" ")[1] + " " + time.toDateString().split(" ")[3] + " " + time.toLocaleTimeString()} </Card.Title>
                        <div className={"d-flex justify-content-center"}>
                            <Button onClick={() => this.handleOnclickDel()} variant="success"
                                    className={"mr-1"}>Удалить</Button>
                            <Button onClick={(e:any) =>{
                                e.currentTarget.disabled=true
                                this.handleOnclickUp(e)
                            }
                            } variant="danger">Обновить</Button>
                        </div>
                    </Card.Body>
                </Card>
            )
        } else return null
    }
}


