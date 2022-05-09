import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { mainScreenStyles } from './ComponentStyles/mainScreenStyles';
import './topBar'
import './bottomBar'
@customElement('fixzy-detect')
export class MainScreen extends LitElement {
    static styles = mainScreenStyles

    render() {
     return html`
      <div class="screen-container">
        <top-bar></top-bar>
        <bottom-bar></bottom-bar>
      </div>
     `
    }
}