import {LitElement, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import { start } from 'repl';
import { topBarStyles } from './ComponentStyles/topBarStyles';

@customElement('top-bar')
export class TopBar extends LitElement {
  static styles = topBarStyles

  
  @query('#seconds')
  seconds: HTMLSpanElement

  @query('#minutes')
  minutes: HTMLSpanElement

  @query('#hours')
  hours: HTMLSpanElement

    render() {
     return html`
      <div class="top-bar-container">
        <h2 class="title" @click=${this.startTimer}>demos@fixy.co.uk</h2>
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