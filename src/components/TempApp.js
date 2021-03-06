import react, { useEffect, useState } from "react";
import "./css/style.css"

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6c273e8b1d583c362bb25c4ae3ec773a`
           const response = await fetch(url);

         const resJson = await response.json();     
      //  console.log(resJson);
      setCity(resJson.main);
        }
        fetchApi();
    },[search] )
    return(
        <>
        <div className = "box">
            <div className = "inputData">
                <input className = "inputField" type = "search" onChange = {(event) => {setSearch(event.target.value)} }/>
            </div>

            {!city ? (<p className="hi">No data found</p>) : (
                <div> <div className = "info">
            <h2 className = "location"><i className = "fas fa-street-view"></i>{search}</h2>
            <h1 className = "temp">{city.temp}&deg;C</h1>
            <h3 className = "tempmin_max"> Min : {city.temp_min}&deg;C | Max : {city.temp_max}&deg;C</h3>
            </div>
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
      
        </div>
    
            )

            }
       
           </div>
        </>
    )
}

export default Tempapp;
