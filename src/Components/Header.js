import React from "react";
import styled from 'styled-components';

const WrapperDiv = styled.div`
background-color: aqua;
color: purple;
`;

export default function Header (){
        return (
            <WrapperDiv>
                <h1>Nasa Pic of The Day</h1>
            </WrapperDiv>
        )
    }
    

