import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import classes from "./aside.module.scss"
import { AppStateType } from "../../../redux/redux-store";
import {connect} from "react-redux";



export class Aside extends Component<AsideProps> {
    state={
        maxim:-273,
        maxCity:"",
        minCity:"",
        minim:273,
    }
    isNewRecord(){
        for(let i=0;i<Number(localStorage.getItem("isCity"))&&Number(localStorage.getItem("isCity"))>1;i++) {
            let temp = Number(JSON.parse(localStorage.getItem(`${i}`)!).temp.toFixed(2))
            let city = JSON.parse(localStorage.getItem(`${i}`)!).name
            //MAX/MIN
            if (this.state.maxim < temp) {
                this.setState({maxim: temp})
                this.setState({maxCity: city})

            }
            if(this.state.minim>temp) {
                this.setState({minCity: city})
                this.setState({minim: temp})
            }
        }
    }
componentDidMount() {
            this.isNewRecord()
}

    componentDidUpdate(prevProps: Readonly<AsideProps>, prevState: Readonly<AsideProps>, snapshot?: any) {
        debugger
        this.isNewRecord()
    }

    render() {
        return (
            <aside className={`${classes.root} m-1`}>
                <Carousel fade>
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
                            <p>{this.state.maxim+" "+this.state.maxCity}</p>
                            <h3>Minimum temperature</h3>
                            <p>{this.state.minim+" "+this.state.minCity}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </aside>
        )
    }
}

export type AsideProps = ReturnType<typeof mapStateToProps>

let mapStateToProps = (store: AppStateType) =>({
    weather: store.header.weather
})

export const AsideContainer = connect(mapStateToProps)(Aside);
