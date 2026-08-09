import { use, useEffect, useState } from "react"

export function Weather(){

    const [search,setsearch] = useState("Lahore")
    const [data,setdata] = useState({})
    const city = search.trim() || "lahore"

    function handleClick(city){
        
        
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=902c61bfddca0ec55d4540b091ae41d8`)
            .then(response=>response.json())
            .then(data =>{
                setdata(data)
            
        })
    }
    useEffect(() => {
    handleClick("Lahore");
}, []);
    return(
        <div className="flex justify-center">
            <div className=" p-4 bg-green-300 h-1/3 w-1/2 "> 
            <input className="bg-white p-2 rounded-lg w-5/6" 
            type="text" 
            placeholder="Enter the location" 
            name="search"
            value={search}
            onChange={(e)=> setsearch(e.target.value)}
            />
            <button onClick={()=>handleClick(city)} className="bg-black text-white rounded-lg p-2 m-2">search</button>
            <div className="grid justify-items-center grid-cols-1 gap-2">
                <h1 className="font-bold text-2xl mt-2">{data.name}</h1>
              
                <h1 className="font-bold text-4xl">{data.main?.temp}</h1>
                <p className="font-bold">{data.weather?.[0]?.main}</p>   
            </div>
                <div className="flex justify-center gap-40 font-bold mt-4 mb-10">
            <div className="text-center">
                <p>{data.wind?.speed}</p>
                <h3>windspeed</h3>
            </div>
            <div className="text-center">
                <p>{data.main?.humidity}%</p>
                <h3>Humidity</h3>
            </div>
                </div>
            </div>

        </div>
    )

}