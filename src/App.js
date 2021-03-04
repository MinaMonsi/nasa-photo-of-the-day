import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=FFZTWmAzFfkoQTl1D6aBB98sh1czoua3OgYF2j5A')
    .then((res) => {
      console.log("axios response;", res.data)
    setData(res.data)
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <h2>{data.date}</h2>
      <img src={data.url}></img>
      <p>{data.explanation}</p>
      
    </div>
  );
}

export default App;
