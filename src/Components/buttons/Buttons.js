import React, { useState } from 'react'
import styled from 'styled-components'

export const ButtonsStyled = styled.div`
button{
    width:50%;
    height:100px;
    font-size:25px;
}
`

export let Buttons = () => {
    
    const [count, setCount] = useState(1);

    console.log('count', count);

    return (
        <ButtonsStyled>
            <button onClick={() => {
                if (count <= 1) {
                    setCount(1)
                } else {
                    setCount(count - 1)
                }
            }}>Anterior</button>
            
            <button onClick={() => setCount(count + 1)}>Siguiente</button>
        </ButtonsStyled>
    );

}

export default Buttons