import { LitElement, html, PropertyValues } from 'lit';
import { customElement, query, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js'
import { videoScreenStyles } from './ComponentStyles/videoScreenStyles';
import './bottomBar'

@customElement('video-screen')
export class VideoScreen extends LitElement {

 static styles = videoScreenStyles
  
 @property()
 returnedData: any 
 
 @query('#canvas')
 canvas!: HTMLCanvasElement

 @query('#video')
 video: HTMLVideoElement

 @state()
 hasPhoto: boolean

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
    navigator.mediaDevices.getUserMedia({video: {
      width: { ideal: 640 },
      facingMode: "environment"}})
    .then(stream => {
      this.video.srcObject = stream
      this.video.play()
    })
    .catch(err => console.log(err))
  }

  return html` 
 
      <canvas id="canvas"></canvas>
      ${this.hasPhoto ? html `
        <div class= "error-container">
          ${map(this.returnedData, (actualData) => 
            html`
             <span class="detect-pill">${actualData} Detected</span>
            `
          )}
        </div>
      ` : html`
         <video id="video" playsinline autoplay></video>
      `}
      ` 
   }

 private _takePhoto() {
  this.hasPhoto = !this.hasPhoto
  const API_URL = 'http://82.4.26.118:5050/process'
  const ctx = this.canvas?.getContext('2d')
  //Use this for webcam
  ctx.canvas.width = 400;
  ctx.canvas.height = 300;

  // Use this for devices
  // ctx.canvas.width = 390;
  // ctx.canvas.height = 520; 
  ctx?.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height)
  
  this.canvas.toBlob((blob) => {
    const formData = new FormData()
    formData.append('file', blob)
    fetch(API_URL, {
      method: "POST",
      body: formData
    }) 
    .then(response => response.text())
    .then(data => {  
      this.returnedData = data.replace(/[^A-Za-z*]/g, ' ').split("*")
      console.log(this.returnedData);
      })
    .catch(error => console.log(error))
    }, 'image/jpeg')
  }   
  
 private _clearPhoto() {
  this.hasPhoto = !this.hasPhoto
  const ctx = this.canvas?.getContext('2d')
  ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
  this.returnedData = ""
 } 
}








  