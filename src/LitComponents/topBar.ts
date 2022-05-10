import {LitElement, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import { topBarStyles } from './ComponentStyles/topBarStyles';

@customElement('top-bar')
export class TopBar extends LitElement {
  static styles = topBarStyles
  
  @query('#seconds')
  seconds: number

  @query('#minutes')
  minutes: number

  @query('#hours')
  hours: number

    render() {
     return html`
      <div class="top-bar-container">
        <h2 class="title">demos@fixy.co.uk</h2>
        <p class="timer">
          <span id="hours">00</span>
          <span id="minutes">00</span>
          <span id="seconds">00</span>
        </p>
      </div>
     `
   }
    startTimer() {
    }
  }