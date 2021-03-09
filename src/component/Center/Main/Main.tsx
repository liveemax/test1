import React, {Component} from "react";
import {City} from "./City/City";
import classes from "./main.module.scss"
import {MainDispatch, MainProps} from "./MainContainer"

export class Main extends Component<MainProps & MainDispatch> {
    state = {
        cityData: [] as any,
    }

    del(ind: number) {
        //Удаляем город, перезаписывает state данныйх и локальное хранилище
        let count = 0;
        delete this.state.cityData[ind]
        for (let [key, val] of Object.entries(this.state.cityData)) {
            this.state.cityData[count] = val
            localStorage.setItem(`${count}`, localStorage.getItem(`${key}`)!)
            count++
        }
        delete this.state.cityData[localStorage.getItem("isCity")!]
        localStorage.removeItem(localStorage.getItem("isCity")!)
        this.forceUpdate()
    }

    componentDidMount() {
        //Запустили приложение, города уже есть?
        if (localStorage.getItem("isCity")) {
            for (let i = 0; i <= Number(localStorage.getItem("isCity")); i++) {
                this.state.cityData[i] = localStorage.getItem(String(i))
                this.forceUpdate()
            }
        }
    }


    render() {
        return (
            <main className={`d-flex flex-wrap container-fluid p-0 ${classes.root}`}>
                {this.state.cityData.map((el: string, ind: number) => {
                    return (<City update={this.props.addCity} index={ind} del={(ind: number) => this.del(ind)}
                                  city={JSON.parse(el)} key={el}/>)
                }).reverse()}
            </main>
        )
    }
}


