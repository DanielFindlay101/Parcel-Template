import { css } from 'lit'

export const topBarStyles = css`
    .top-bar-container {
        background-color: #41415b;
        width: 800px;
        height: 3rem;
        border-radius: 25px;
        color: white;
        margin-top: 2rem;
        z-index: 100;
    }
    .title {
        padding-left: 20px;
        font-size: 0.8rem;        
    }
    .timer { 
        font-size: 0.8rem;
        position: absolute;
        left: 57px;
        top: 63px;
    }
`
