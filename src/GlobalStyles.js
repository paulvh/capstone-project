import React from 'react'
import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background: #272b4d;
        height: 100vh;   
    }
    main {
        margin: 50px 10px;
        border-radius: 15px;
        box-shadow: inset 10px 10px 15px #212541, inset -10px -10px 15px #2d3159;
        height: 500px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    } 
`