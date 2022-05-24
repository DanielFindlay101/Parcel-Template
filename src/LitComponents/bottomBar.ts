import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
        <button class="btn-snap"
          @click="${() => {
              window.dispatchEvent(new CustomEvent('photo-event'))
            }}"
            @click=${() => this._toggleClicked}>
            Snap
        </button>
        <button class="btn-outline"></button>
      </div>
    `
  }

  private dispatcher() {
    
  }

  private _toggleClicked(){
    console.log(this.hasClicked)
    this.hasClicked = !this.hasClicked
    this.requestUpdate()
  }
}