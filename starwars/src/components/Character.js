// Write your Character component here

import React from 'react';
import styled from 'styled-components'

const StyledCharacter = styled.div`
    display: flex;
    justify-content: center;

    #hairColor {
        color: white;
    }
    #characterName {
        color: ${props => props.theme.primaryColor};
    }


    #characterSection{
        display: flex;
        justify-content: space-between;
        background-color: ${props => props.theme.tertiaryColor};
        height: 110%;
        width: 35rem;

        border-style: solid;
        border-color: red;
    }

`

const Character = (props) => {
    const {name, hair_color} = props.data

    return (
        <StyledCharacter>
        <div className="characterDiv">
            <section id="characterSection">
            <p id="characterName">{name}</p>
            <p id="hairColor">{hair_color}</p>
            </section>
            
        </div>
        </StyledCharacter>
     
    )
}

export default Character;