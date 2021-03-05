import React from "react";
import styled from "styled-components";
// import Practice from "./Practice";

// const name = "Mina";

const ParaDiv = styled.div`
 text-align: center;
 color: #048BA8;
 margin: 20px 50px;
 `;

export default function Info(props){
    return(
      <ParaDiv>
       <p>{props.data.explanation}</p>
       {/* <Practice name={name}/> */}
      </ParaDiv>

    )
}