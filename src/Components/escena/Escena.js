import React from 'react'
import historia from '../../historia'
import { Round } from '../styled/Styled'


const Escena = ({ param }) => {
    return (
        <div>
            <Round>
                <p>
                    {historia[param].txt}
                </p>
            </Round>
            {/* <img src={historia[param].img} /> */}
        </div>
    )
}


export default Escena
