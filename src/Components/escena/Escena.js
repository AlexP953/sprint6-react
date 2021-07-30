import React from 'react'
import historia from '../../historia.json'
import styled from 'styled-components'
import count from '../buttons/Buttons'


export const Round = styled.p`
    width:85%;
    text-align:center;
    margin:0 auto;
    padding:5px;
    margin-top:10px;
    border-radius: 50px;
    border: 5px solid black;
    }
`



const Escena = ({ param }) => {
    let numParam = param;
    console.log(numParam);
    return (
        <Round>
            <p>
                {historia[numParam]}
            </p>
            <p>{count}</p>
        </Round>
    )
}


export default Escena
