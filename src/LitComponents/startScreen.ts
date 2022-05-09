import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import { startScreenStyles } from './ComponentStyles/startScreenStyles';

@customElement('start-screen')
export class StartScreen extends LitElement {
  static styles = startScreenStyles
  
   protected render() {
     return html`
      <div class="main-container">
        Please tap / click here to start
      </div>
     `
   }
  }
