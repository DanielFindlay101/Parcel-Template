import { css } from 'lit'

export const bottomBarStyles = css`
 .bottom-bar-container {
   background-color: white;
   width: 800px;
   height: 5rem;
   border-radius: 25px;
   color: white;
   margin-top: 2rem;
   margin-bottom: 2rem;
   display: inline-flex;
   justify-content: center;
  }
 .btn-snap {
   background-color: #df4753;
   color: #fff;
   width: 4rem;
   height: 4rem;
   border: none;
   border-radius: 1rem;
   margin: auto 0.5rem;
  }
 .btn-snap:hover {
   background-color: #ca3d49;
   cursor: pointer;
 }
 .btn-outline {
   background-color: white;
   width: 4rem;
   height: 4rem;
   border: none;
   border-radius: 1rem;
   margin: auto 0.5rem;
 }
 .btn-outline:hover {
   background-color: #e2e2e2;
   cursor: pointer;
 }
`
   