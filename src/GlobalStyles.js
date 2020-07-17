import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
    :root{
        
    }
    
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        background: #272b4d;
        height: 100vh;
        padding: 0px 10px 10px 10px; 
        font-family: sans-serif
    }
    
    main {
        border-radius: 15px;
        box-shadow: inset 10px 10px 15px #212541, inset -10px -10px 15px #2d3159;
        padding: 50px 20px;
        display: grid;
        gap: 30px;
        justify-content: center;
        overflow: scroll;
    } 

    .buttonBorder{
        box-shadow: 6px 6px 8px #1d2039, -6px -6px 8px #313661;
    }
`
