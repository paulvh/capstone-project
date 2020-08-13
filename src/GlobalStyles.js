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
        height: 90vh; 
        padding: 0px 10px 10px 10px; 
        font-family: sans-serif
    }
    
    main {
        border-radius: 15px;
        box-shadow: inset 10px 10px 15px #212541, inset -10px -10px 15px #2d3159;
        padding: 30px 20px 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
        height: 80vh;
        
    } 

    main > * {
        margin-bottom: 30px;
    }

    main::after{
        color: #272b4d;
        content: "1";
        display: block;
        height: 1px;
    }

    .styledSelect{
        appearance: none;
        width: 200px;
        height: 30px;
        padding: 5px;
        background: #c0c4ed;
        box-shadow: inset 5px 5px 10px #9c9fc0, inset -5px -5px 10px #e4e9ff;
        outline: none;
        border-radius: 3px;
        margin: 0;
    }
    .fixed-position{
        poition: fixed;
    }
    
    h1,h2,h3,h4,h5{
        margin: 0;
        color: #f65164;
    }

   


`
