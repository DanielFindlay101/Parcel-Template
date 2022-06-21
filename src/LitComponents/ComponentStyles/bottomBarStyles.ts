import { css } from 'lit'

export const bottomBarStyles = css`
 .bottom-bar-container {
   /* background-color: white; */
   background-color: transparent;
   width: 800px;
   height: 3.5rem;
   border-radius: 25px;
   color: white;
   margin-top: 2rem;
   margin-bottom: 2rem;
   display: inline-flex;
   justify-content: center;
   z-index: 100;
  }
 .btn-snap {
   /* background-color: #df4753; */
   background-color: hsl(26, 92%, 55%);
   color: #fff;
   width: 4rem;
   height: 3.5rem;
   border: none;
   border-radius: 1rem;
   margin: auto 0.5rem;
  }
 .btn-snap:hover {
   /* background-color: #ca3d49; */
   cursor: pointer;
 }
 .btn-outline {
   /* background-color: white; */
   background-color: transparent;
   width: 4rem;
   height: 2.5rem;
   border: none;
   border-radius: 1rem;
   margin: auto 0.5rem;
 }
 .btn-outline:hover {
   background-color: #e2e2e2;
   cursor: pointer;
 }
`