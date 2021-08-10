import React from 'react'
import historia from '../../historia'

import { Round } from '../styled/Styled'
import { useContext } from 'react';
import { AppContext } from '../Provider';

const Escena = ({ param }) => {
    const [state, setState] = useContext(AppContext);

    return (
        <div>
            <div>
                <Round>
                    <p>
                        {historia[param].txt}
                    </p>
                </Round>
            </div>
            {/* Descomentando esto consigo que se vean las imagenes pero no se hacer que se vea de fondo porque no acabo de entender  el styled components ni consigo hacer que se marque solo una linea cada vez */}
            
            {/* <div><img src={historia[state].img} /></div> */}
        </div>
    )
}


export default Escena
