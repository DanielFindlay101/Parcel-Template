import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import { ClockController } from './clock-controller';
import { topBarStyles } from './ComponentStyles/topBarStyles';
const AssuredLogoHorizontak = require ('../assets/AS_Logo_Horiz_color_1000px.jpg')

@customElement('top-bar')
export class TopBar extends LitElement {
  static styles = topBarStyles
  private clock = new ClockController(this)
  
    render() {
     const elapsedTime=(this.clock.value) 
     return html`
      <div class="top-bar-container">
        <img class="img-styles" src=${AssuredLogoHorizontak} />
        <span class="timer">${elapsedTime}</span>
      </div>
     `
    }
  }