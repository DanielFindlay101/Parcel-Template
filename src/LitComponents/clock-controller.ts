import { ReactiveController, ReactiveControllerHost } from 'lit';
import { html } from 'lit';

export class ClockController implements ReactiveController {
  host: ReactiveControllerHost;
 
  seconds = 0
  minutes = 0
  hours = 0
  value: any
  timeout: number;
  private _timerID?: number;
   
  constructor(host: ReactiveControllerHost, timeout = 1000) {
    (this.host = host).addController(this);
    this.timeout = timeout
  }
  hostConnected() {
   setInterval(() => {
   this.seconds++

   if(this.seconds > 59){
      this.minutes++
      this.seconds = 0
   } 

   if(this.minutes > 59){
      this.hours++
      this.minutes = 0
    }      

   this.value = html`
     ${this.hours < 10 ? html`0${this.hours}` : html`${this.hours}`} :
     ${this.minutes < 10 ? html`0${this.minutes}` : html`${this.minutes}`} :
     ${this.seconds < 10 ? html`0${this.seconds}` : html`${this.seconds}`}`
     this.host.requestUpdate();
   }, 1000);
  }

  hostDisconnected() {
    clearInterval(this._timerID);
    this._timerID = undefined;
  }
}