import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import { startScreenStyles } from './ComponentStyles/startScreenStyles';
const AssuredLogo = require ('../assets/AS_Logo_3D_1000px.jpg')

@customElement('start-screen')
export class StartScreen extends LitElement {
  static styles = startScreenStyles
  
   protected render() {
     return html`
      <div class="main-container">
        <img class="logo-styles" src = ${AssuredLogo} />
        <h3 class="title-styles">Please tap / click here to start.</h3>
      </div>
     `
   }
  }
