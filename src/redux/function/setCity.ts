
export const setCity=(data:any)=>{
    const city=data.geonames.map((el:any,ind:number)=>
    {
        return el.name
    })
    return city
}