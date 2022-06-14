import { LitElement, html } from 'lit';
import { customElement, property,state } from 'lit/decorators.js';
import { bottomBarStyles } from './ComponentStyles/bottomBarStyles';
import './videoScreen'

@customElement('bottom-bar')
export class BottomBar extends LitElement {
  static styles = bottomBarStyles

  @property()
  hasClicked: boolean = false
  

  protected render() {
    return html`
      <div class="bottom-bar-container">
        <button class="btn-outline"></button>
        <button class="btn-snap" @click=${this._togglePhoto}>
            ${this.hasClicked ? html `CLOSE` : html `SNAP`}
        </button>
        <button class="btn-outline"></button>
      </div>
    `
  }

  private _togglePhoto(){
    this.hasClicked = !this.hasClicked
    if(!this.hasClicked){
     window.dispatchEvent(new CustomEvent('clear-event'))
    } else {
      window.dispatchEvent(new CustomEvent('photo-event'))
    }
  }
}