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
        //Init
        this.setState({maxim: -273})
        this.setState({maxCity: ""})
        this.setState({minCity: ""})
        this.setState({minim: 273})
        //Update

        for(let key of this.props.currentListCity) {
            if (this.state.maxim < key.temp){
                this.setState({maxim: key.temp})
                this.setState({maxCity: key.city})
            }
            if(this.state.maxim >key.temp){
                this.setState({minCity: key.city})
                this.setState({minim: key.temp})
            }
        }
        //MAX/MIN пушим в стэйт
    }
    componentDidUpdate(prevProps: Readonly<AsideProps>, prevState: Readonly<AsideProps>, snapshot?: any) {
    }

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
    currentListCity:store.header.currentListCity
})

export const AsideContainer = connect(mapStateToProps)(Aside);
