import { css } from 'lit'

export const topBarStyles = css`
    .top-bar-container {
        background-color: #41415b;
        width: 800px;
        border: solid red 2px;
        height: 4rem;
        border-radius: 25px;
        color: white;
        margin-top: 2rem;

        @media(max-width: 400px) {
            width: 800px;
        }
    }
    .title {
        padding-left: 20px;
        padding-top: 8px;
        font-size: 1rem;
        
    }
    .timer { 
        padding-left: 20px;
    }
`