import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import classes from "./aside.module.scss"
import { AppStateType } from "../../../redux/redux-store";
import {connect} from "react-redux";



export class Aside extends Component<AsideProps> {
    render(){
        return (
            <aside className={`${classes.root} m-1`}>
                <Carousel nextIcon={<span/>}
                          prevIcon={<span/>}
                          indicators={false}
                    interval={null} fade>
                    <Carousel.Item className={`text-dark`}>
                        <img
                            className="d-block w-100"
                            src="https://scsf.org/wp-content/uploads/AdobeStock_diamond-scaled.jpeg"
                            alt="First slide"
                            style={{minHeight:`100vh-100px`}}
                        />
                        <Carousel.Caption>
                            <h3  className={`text-dark`}>Widget</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={`${classes.item}`}>
                        <img
                            src="https://scsf.org/wp-content/uploads/AdobeStock_diamond-scaled.jpeg"
                            className="d-block w-100"
                            alt="Second slide"
                        />
                        <Carousel.Caption className={`${classes.text} text-dark m-auto`}>
                            <h3>Максимальная температура</h3>
                            <p>{localStorage.getItem("max")}</p>
                            <h3>Минимальная температура</h3>
                            <p>{localStorage.getItem("min")}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </aside>
        )
    }
}

export type AsideProps = ReturnType<typeof mapStateToProps>

let mapStateToProps = (store: AppStateType) =>({
    currentListCity:store.header.currentListCity
})

export const AsideContainer = connect(mapStateToProps)(Aside);
