import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Archive from "./Components/Archive";
import Info from "./Components/Info";
import styled from "styled-components";

const TitleH2 = styled.h2`
color: #7400B8;
`;
const DateH3 = styled.h3`
color: #7400B8;
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
      <TitleH2>{data.title}</TitleH2>
      <DateH3>{data.date}</DateH3>
      <img src={data.url} alt = "Nasa APOD"></img>
      <Info data={data}/>
      <Archive/>
      
    </div>
  );
}

export default App;
