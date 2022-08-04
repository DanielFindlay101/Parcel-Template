import { css } from 'lit'

export const videoScreenStyles = css`
#video {
  position: absolute;
    right: 0;
    bottom: 0;
    min-height: 100%;
    min-width: 100%;
    width: auto;
    height: auto;
    background-size: cover;
    overflow: hidden;
}
#canvas {
    position: absolute;
    right: 0;
    bottom: 0;
    min-height: 100%;
    min-width: 100%;
    width: auto;
    height: auto;
    background-size: cover;
    overflow: hidden;
    }
#box {
  /* width: 50px;
  height: 50px;
  position: absolute;
  top: 100px;
  left: 40px; */
  background-color: red;
  z-index: 1;
}
.user-container {
  z-index: 99;
}
.user-style {
  background-color: red;
  position: absolute;
}
.detect-container {
  position: absolute;
  background-color: green;
  width: 20rem;
  height: 10rem;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: center;
}
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  bottom: 8%;
  left: 0;
  position: absolute;
  width: 100%;
  height: 30%;
  z-index: 99;
}
.detect-pill {
  background-color: hsl(26, 92%, 55%);
  color: white;
  border-radius: 0.5rem;
  text-align: center;
  font-family: sans-serif;
  padding: 1%;
  height: 25%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
`