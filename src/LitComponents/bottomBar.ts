import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { bottomBarStyles } from './ComponentStyles/bottomBarStyles';
import './videoScreen'

@customElement('bottom-bar')
export class BottomBar extends LitElement {
  static styles = bottomBarStyles

  protected render() {
    return html`
      <div class="bottom-bar-container">
        <button class="btn-outline"></button>
        <button class="btn-snap"
          @click="${() => {
              window.dispatchEvent(new CustomEvent('photo-event'))
            }}">
            Snap
        </button>
        <button class="btn-outline"
          @click="${() => {
              window.dispatchEvent(new CustomEvent('clear-event'))
            }}">
            Clear
        </button>
      </div>
    `
  }
}