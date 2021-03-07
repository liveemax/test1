import React, {Component} from "react";
import {City} from "./City/City";
import classes from "./main.module.scss"
import {MainDispatch, MainProps} from "./MainContainer"

export class Main extends Component<MainProps & MainDispatch> {
    state={
        cityData: [] as any,
    }
    del(ind:number){
        //Удаляем город, перезаписывает state данныйх, локальное хранилище
        let count=0;
        delete this.state.cityData[ind]
        for (let [key,val] of Object.entries(this.state.cityData))
        {
                this.state.cityData[count] = val
                localStorage.setItem(`${count}`,localStorage.getItem(`${key}`)!)
                count++
        }
        delete this.state.cityData[localStorage.getItem("isCity")!]
        localStorage.removeItem(localStorage.getItem("isCity")!)
        this.forceUpdate()
    }
    componentDidMount() {
        //Запустили приложение, города уже есть?
    if(localStorage.getItem("isCity"))
        {
            for(let i=0;i<=Number(localStorage.getItem("isCity"));i++) {
                this.state.cityData[i] = localStorage.getItem(String(i))
                this.state.cityData[i] = localStorage.getItem(String(i))
                this.forceUpdate()
            }
        }
    }
    componentDidUpdate(prevProps: Readonly<MainProps & MainDispatch>, prevState: Readonly<{}>, snapshot?: any) {
        let data=JSON.stringify(this.props.weather)
        if(prevProps!==this.props) {
            //Инициализация объекта,первые города
            if (localStorage.getItem("isCity") === null) {
                localStorage.setItem("isCity","0")
                localStorage.setItem("cityList","")
            }
            //Новый город, делаем перерисовку и обновляет локальный стэйт
            if(localStorage.getItem(`cityList`)!.split(`${this.props.weather.name}`).length===1){
            localStorage.setItem(localStorage.getItem("isCity")!, data)
                localStorage.setItem("cityList",`${localStorage.getItem("cityList")},${this.props.weather.name}`)
            this.state.cityData[localStorage.getItem("isCity")!] = data
            localStorage.setItem("isCity", String(Number(localStorage.getItem("isCity")) + 1))
                }
            //Если Уже существует город с таким именем
            else{
                for (let [key,val] of Object.entries(this.state.cityData))
                {
                    let name=JSON.parse(val as string)
                    debugger
                    if(name?.name===this.props.weather.name)
                    {
                        this.state.cityData[key] = JSON.stringify(this.props.weather)
                    }
                }
            }
            this.forceUpdate()
        }
    }

    render() {
        return (
            <main className={`d-flex flex-wrap container-fluid p-0 ${classes.root}`}>
                {this.state.cityData.map((el:string,ind:number)=>
                {
                    return(<City update={this.props.observeCity} index={ind} del={(ind:number)=>this.del(ind)} city={JSON.parse(el)} key={el}/>)
                }).reverse()}
            </main>
        )
    }
}


