import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import classes from "./aside.module.scss"
import { AppStateType } from "../../../redux/redux-store";
import {connect} from "react-redux";



export class Aside extends Component<AsideProps> {
    render(){
        return (
            <aside className={`${classes.root} m-1`}>
                <Carousel interval={null} fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.wallpapersafari.com/phone/640/1136/10/1/pSULXr.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Widget</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://img.wallpapersafari.com/phone/640/1136/10/1/pSULXr.jpg"
                            className="d-block w-100"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Maximum temperature</h3>
                            <p>{localStorage.getItem("max")}</p>
                            <h3>Minimum temperature</h3>
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
