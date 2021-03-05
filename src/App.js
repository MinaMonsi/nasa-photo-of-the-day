import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import styled from "styled-components";

const ParaDiv = styled.p`
 text-align: center;
 color: blue;
 margin: 20px 50px;
 `;

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
      <Header/>
      <h2>{data.title}</h2>
      <h3>{data.date}</h3>
      <img src={data.url} alt = "Nasa APOD"></img>
      {/* <p>{data.explanation}</p> */}
      <ParaDiv>
       {data.explanation}
      </ParaDiv>
      
    </div>
  );
}

export default App;
