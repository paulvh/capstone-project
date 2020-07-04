import React from 'react';
import styled from 'styled-components'

export default function Button({buttonCount = 1, buttonName , onClickFunction, message}){
    
    if(buttonCount === 1){
        return(
            <StyledButtonBorder>
                <StyledButton onClick={() => onClickFunction(message)}>{buttonName[0]}</StyledButton>
            </StyledButtonBorder>
        )   
    }
    
    /* if(buttonCount ===2){
        return(
            <StyledButtonBorder>

            </StyledButtonBorder>
        )
    } 

    if(buttonCount ===3){
        return(
            <StyledButtonBorder>

            </StyledButtonBorder>
        )
    } */
     
}





const StyledButton = styled.button`
    background: #e7394d;
    border: none; 
    color: e9ebf9;
    border-radius: 5px;
    width: 150px;
    height: 50px;
    
    &:active{
        background: #f65164;
    }
`

const StyledButtonBorder = styled.div`
    border-radius: 5px;
    box-shadow:  5px 5px 6px #1d2039, -5px -5px 6px #313661;
    padding: 5px;
`