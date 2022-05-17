import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { mainScreenStyles } from './ComponentStyles/mainScreenStyles';
import './topBar'
import './bottomBar'
import './videoScreen'

@customElement('fixzy-detect')
export class MainScreen extends LitElement {
  static styles = mainScreenStyles
    render() {
     return html`
      <div class="screen-container">
        <top-bar class="topbar-styles"></top-bar>
        <video-screen></video-screen>
        <bottom-bar class="bottombar-styles"></bottom-bar>
      </div>
     `
    }
}