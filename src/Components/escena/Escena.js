import React from 'react'
import historia from '../../historia.json'
import {Round} from '../styled/Styled'


const Escena = ({ param }) => {
       return (
        <Round>
            <p>
                {historia[param]}
            </p>
        </Round>
    )
}


export default Escena
