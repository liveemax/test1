import React, {Component} from "react";
import {City} from "./City/City";
import classes from "./main.module.scss"
import {MainDispatch, MainProps} from "./MainContainer"

export class Main extends Component<MainProps & MainDispatch> {

    del(ind: number) {
        this.props.remCity(ind)
    }

    componentDidMount() {
        //Запустили приложение, города уже есть?
        if (localStorage.getItem("isCity")) {
            this.props.setCurrentCity()
        }
    }


    render() {
        return (
            <main className={`d-flex flex-wrap container-fluid p-0 ${classes.root}`}>
                {this.props.currentListCity.map((el: any, ind: number) => {
                    return (<City update={this.props.addCity} index={ind} del={(ind: number) => this.del(ind)}
                                  city={el} key={el.name}/>)
                }).reverse()}
            </main>
        )
    }
}


