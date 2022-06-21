import { css } from 'lit'

export const topBarStyles = css`
    .top-bar-container {
        /* background-color: #41415b; */
        border: 1px solid #bbb;
        background-color: white;
        width: 800px;
        border-radius: 25px;
        color: white;
        margin-top: 2rem;
        padding-bottom: 5px;
        z-index: 100;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .title {
     padding-left: 20px;
     font-size: 0.8rem;  
     color: black;
    }
    .timer { 
     font-size: 0.9rem;
     color: black;
     font-family: sans-serif;
    }
    .img-styles {
     width: 75%;
     padding-top: 0.5rem;
    }
`