import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import { ClockController } from './clock-controller';
import { topBarStyles } from './ComponentStyles/topBarStyles';

@customElement('top-bar')
export class TopBar extends LitElement {
  static styles = topBarStyles
  private clock = new ClockController(this)
  
    render() {
     const elapsedTime=(this.clock.value) 
     return html`
      <div class="top-bar-container">
        <h2 class="title">Fixzy Defect Detection</h2>
        <span class="timer">${elapsedTime}</span>
      </div>
     `
    }
  }