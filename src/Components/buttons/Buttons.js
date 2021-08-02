import React, { useState } from 'react'
import {ButtonsStyled} from '../styled/Styled';


const Buttons = () => {

    const [count, setCount] = useState(0);

    console.log('count', count);

    return (
        <ButtonsStyled>
            <button onClick={() => {
                if (count <= 0) {
                    setCount(0)
                } else {
                    setCount(count - 1)
                }
            }}>Anterior</button>

            <button onClick={() => {
                if (count >= 3) {
                    setCount(3)
                } else {
                    setCount(count + 1)
                }
            }}>Siguiente</button>
        </ButtonsStyled>
    );

}

export default Buttons