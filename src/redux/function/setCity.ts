
export const setCity=(data:any)=>{
    const city=[""]
    const xy=[] as any[]
    if(data.status?.value===19) {
        alert(data.status.message)
        return {city,xy}
    }
    data.geonames.map((el:any,ind:number)=>
    {
        city[ind]=`${el.name},${el.countryName}`
        xy[ind]=[el.lat,el.lng]
    })

    return {city,xy}
}