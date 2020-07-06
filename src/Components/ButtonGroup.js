import React from 'react';
import styled from 'styled-components'
import Button from './Button'

export default function ButtonGroup({buttonNames , onClickFunction, messages}){
    
    const isButtonGroup = buttonNames.length > 1
    
    return(
        <StyledButtonGroup>
            {
                buttonNames.map((name, index) =>(
                    <Button circularButton={isButtonGroup} buttonName={name} onClickFunction={onClickFunction} message={messages[index]} colorIndex={index} key={index}/>
                ))
            }
        </StyledButtonGroup>
    )
}




const StyledButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
`