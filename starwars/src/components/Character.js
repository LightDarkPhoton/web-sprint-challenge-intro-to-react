// Write your Character component here

import React from 'react';
import styled from 'styled-components'

const StyledCharacter = styled.div`
    display: flex;
    justify-content: center;

    .characterName {
        color: purple;
    }
`

const Character = (props) => {
    const {name} = props.data

    return (
        <StyledCharacter>
        <div className="characterName">
            <p>{name}</p>
        </div>
        </StyledCharacter>
     
    )
}

export default Character;