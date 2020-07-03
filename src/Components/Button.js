import React from 'react';
import styled from 'styled-components'

export default function Button(){
    
    return(
        <StyledButtonBorder>
            <StyledButton>Button 1</StyledButton>
        </StyledButtonBorder>
    )  
}





const StyledButton = styled.button`
    width: 150px;
    height: 50px;
    background: #f65164;
    border: none; 
    color: e9ebf9;
    border-radius: 5px;
`

const StyledButtonBorder = styled.div`
    border-radius: 5px;
    box-shadow:  5px 5px 6px #1d2039, -5px -5px 6px #313661;
    padding: 5px;
`