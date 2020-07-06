import React from 'react';
import styled from 'styled-components'
import logo from '../Images/logo.svg'

export default function Header(){

    return(
        <StyledHeader>
            <img src={logo} alt=""/>
        </StyledHeader>
    )
}



const StyledHeader = styled.header`
    height: 50px;
    display: flex;
    justify-content: start;
`