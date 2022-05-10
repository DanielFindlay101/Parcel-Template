import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import { topBarStyles } from './ComponentStyles/topBarStyles';

@customElement('top-bar')
export class TopBar extends LitElement {
  static styles = topBarStyles
  
  @property() duration = 60;
  @state() private end: number | null = null;
  @state() private remaining = 0;


    render() {
     const {remaining,  running} = this;
     const min = Math.floor(remaining / 60000)
     const sec = pad(min, Math.floor(remaining / 1000 % 60))
     

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