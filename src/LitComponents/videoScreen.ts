import {LitElement, html, PropertyValues} from 'lit';
import {customElement, query, property} from 'lit/decorators.js';
import { videoScreenStyles } from './ComponentStyles/videoScreenStyles';
import './bottomBar'

@customElement('video-screen')
export class VideoScreen extends LitElement {

 static styles = videoScreenStyles
 
 @query('#canvas')
 canvas!: HTMLCanvasElement

 @query('#video')
 video: HTMLVideoElement

 createPhotoEvent: any
 clearPhotoEvent: any
 
connectedCallback(): void {
  super.connectedCallback()
  this.createPhotoEvent = this._takePhoto.bind(this)
  this.clearPhotoEvent = this._clearPhoto.bind(this)
  window.addEventListener('photo-event', this.createPhotoEvent)
  window.addEventListener('clear-event', this.clearPhotoEvent)
}
disconnectedCallback(): void {
  window.removeEventListener('photo-event', this.createPhotoEvent)
  window.removeEventListener('clear-event', this.clearPhotoEvent)
  super.disconnectedCallback()
}

 render() {
 
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
      this.video.srcObject = stream
      this.video.play()
    })
  }
  return html`
      <video id="video" width="20px" height="20px" autoplay></video>
      <canvas id="canvas"></canvas>
    `
 }

 private _takePhoto() {  
  const ctx = this.canvas?.getContext('2d')
  ctx.canvas.width = 400;
  ctx.canvas.height = 300; 
  ctx?.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height)  
 }

 private _clearPhoto() {
  const ctx = this.canvas?.getContext('2d')
  ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
 }
}








  