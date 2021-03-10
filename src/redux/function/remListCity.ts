import {setWidget} from "./setWidget";

export const remListCity=(currentListCity:Array<any>,ind:number):Array<any>=>{
    let count = 0;
    if(currentListCity.length===1)
    {
        localStorage.clear()
        return []
    }
    localStorage.setItem("cityList",localStorage.getItem("cityList")!.split(`,${currentListCity[ind].name}`)[1])
    delete currentListCity[ind]
    localStorage.setItem("max","-273  ")
    localStorage.setItem("min","273  ")
    for (let [key, val] of Object.entries(currentListCity)) {
        currentListCity[count] = val
        setWidget(val)
        localStorage.setItem(`${count}`, localStorage.getItem(`${key}`)!)
        count++
    }
    currentListCity.length=Number(localStorage.getItem("isCity"))-1
    localStorage.removeItem(String(Number(localStorage.getItem("isCity"))!-1))
    localStorage.setItem("isCity",String(Number(localStorage.getItem("isCity"))!-1))
    return currentListCity
}