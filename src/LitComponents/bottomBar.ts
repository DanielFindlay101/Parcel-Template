import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import { bottomBarStyles } from './ComponentStyles/bottomBarStyles';

@customElement('bottom-bar')
export class BottomBar extends LitElement {
  static styles = bottomBarStyles
  
  protected render() {
    return html`
      <div class="bottom-bar-container">
        <button class="btn-outline"></button>
        <button class="btn-snap">Snap</button>
        <button class="btn-outline"></button>
      </div>
    `
  }
}