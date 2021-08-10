import React, { useState,useContext } from 'react'
import {ButtonsStyled} from '../styled/Styled';

import {AppContext} from '../Provider';


const Buttons = () => {

    const [count, setCount] = useState(0);
    const [state,setState] = useContext(AppContext);


    console.log('count', count);
    console.log('state', state);

    return (
        <ButtonsStyled>
            <button onClick={() => {
                if (count <= 0) {
                    setCount(0)
                    setState(0)
                } else {
                    setCount(count - 1);
                    setState(count - 1)
                }
            }}>Anterior</button>

            <button onClick={() => {
                if (count >= 3) {
                    setCount(3)
                    setState(3)
                } else {
                    setCount(count + 1)
                    setState(count +1 )
                }
            }}>Siguiente</button>
        </ButtonsStyled>
    );

}

export default Buttons