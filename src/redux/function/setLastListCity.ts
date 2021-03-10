import {setWidget} from "./setWidget";

export const setLastListCity=():Array<any>=>{
    let lastList=[]
        for (let i = 0; i < Number(localStorage.getItem("isCity")); i++) {
            lastList[i] = JSON.parse(localStorage.getItem(String(i))!)
            setWidget(lastList[i])
        }
        return lastList
}