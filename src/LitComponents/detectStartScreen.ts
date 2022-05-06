import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { detectStyles } from './detectStyles';

@customElement('fixzy-detect')
export class FixzyDetect extends LitElement {
  static styles = detectStyles
  
   protected render() {
     return html`
      <div class="main-container"
        @click=${() => this.mainScreen()}>
        Please tap / click here to start
      </div>
     `
   }
   mainScreen() {

   }
  }
