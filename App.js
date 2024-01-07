import React, { useState } from 'react'
import Axios from 'axios'
import "./App.css"
const key="de5c324b6f9a7e5646857e22db138dc0";

const App = () => {
  const[city,setcity]=useState("");
  const[data,setData]=useState();
  
  const fetchData= async () =>{
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      setData(response.data);
    }
    catch(err){
      alert('please enter your city');
    }
  }
  return (
    <div className='App'>
      <h1 className='title'>Weather Forcast</h1>
      <div className='input-container'>
        <input type='text' className='input' value={city} onChange={e => setcity(e.target.value)}
        placeholder='Enter the City Name'/> 
        <button className='button' onClick={fetchData}>click me!</button>
      </div>
      <div>
        {data && (
          <div className='data-container'>
            <h1 className='city-name'>{data.name},{data.sys.country}</h1>
            <div className='weather-info'>
              <div className='temp'>
                {Math.round(data.main.temp)}C</div>
                <div className='lat-lon'>
                  <div>Lat -{data.coord.lat}</div>
                  <div>Lon -{data.coord.lon}</div>
                </div>
            </div>  

          </div>
        )}
      </div>
      </div>
  )
}
export default App