import logo from './logo.svg';
import './App.css';
import { useState,useEffect} from 'react';

function App() {
  const [data,setdata]=useState({})
  const [Wdata,Wsetdata]=useState({})
  const [Cdata,Csetdata]=useState({})
  const [Mdata,Msetdata]=useState({})
  const [Adata,Asetdata]=useState('')
  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2")
    .then((res)=>res.json()).then((res)=>{setdata(res.weather[0])
    Wsetdata(res.wind)
    Csetdata(res.coord)
    Msetdata(res.main)
    Asetdata(res.name)
  })
  }, [])
  return (
    <div className="App">
      {console.log(data)}
      <h1>{Adata}</h1>
      <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt='abc'/>
     <h1>{data.description}</h1>
<h1>Winds</h1>
  <p>{Wdata.deg}</p>
  <p>{Wdata.speed}</p>
<h1>Pressure</h1>
  <p>{Mdata.humidity}</p>
  <p>{Mdata.temp}</p>
  <p>{Mdata.pressure}</p>
    </div>
  );
}

export default App;
