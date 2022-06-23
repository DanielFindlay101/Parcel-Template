import { LitElement, html } from 'lit';
import { customElement, query, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js'
import { videoScreenStyles } from './ComponentStyles/videoScreenStyles';
import './bottomBar'


@customElement('video-screen')
export class VideoScreen extends LitElement {

 static styles = videoScreenStyles
  
 @property()
 returnedData: any 

 @property()
 dataCoordinates: any
 
 @query('#canvas')
 canvas!: HTMLCanvasElement

 @query('#video')
 video: HTMLVideoElement

 @query('#box')
 box: HTMLDivElement

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
         <video id="video" autoplay playsinline></video>
      `}
      ` 
   }

 private _takePhoto() {
  this.hasPhoto = !this.hasPhoto
  const API_URL = 'https://emdev.smartenapps.com/defect-content/index.php'
  const ctx = this.canvas?.getContext('2d')

  // //Use this for webcam
  ctx.canvas.width = 400;
  ctx.canvas.height = 300;

  //Use this for devices
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
      this.dataCoordinates = data.replace(/[^0-9,.]/g, '').split(",").slice(0, 4)
      this.returnedData = data.replace(/[^A-Za-z*]/g, ' ').split("*")
      console.log(this.returnedData)
      console.log(this.dataCoordinates)
      ctx.beginPath();
      ctx.fillStyle = "rgba(223, 71, 83, 0.3)"

      //Draw Window onto canvas
      ctx.fillRect(this.dataCoordinates[1] * this.canvas.width, this.dataCoordinates[0] * this.canvas.height,
        this.dataCoordinates[3] * this.canvas.width - this.dataCoordinates[1] * this.canvas.width,
        this.dataCoordinates[2] * this.canvas.height - this.dataCoordinates[0] * this.canvas.height);

      ctx.fillStyle="rgba(255, 255, 255, 0.3)";
      ctx.fillRect(this.dataCoordinates[1] * this.canvas.width + 5, this.dataCoordinates[0] * this.canvas.height + 5,
        (this.dataCoordinates[3] * this.canvas.width - this.dataCoordinates[1] * this.canvas.width) * 0.4,
        (this.dataCoordinates[2] * this.canvas.height - this.dataCoordinates[0] * this.canvas.height) * 0.4);

      ctx.fillRect((this.dataCoordinates[3] * this.canvas.width - ((this.dataCoordinates[3] * this.canvas.width - this.dataCoordinates[1] * this.canvas.width) * 0.4)) - 5,
       this.dataCoordinates[0] * this.canvas.height + 5,
        (this.dataCoordinates[3] * this.canvas.width - this.dataCoordinates[1] * this.canvas.width) * 0.4,
        (this.dataCoordinates[2] * this.canvas.height - this.dataCoordinates[0] * this.canvas.height) * 0.4);

      ctx.fillRect(this.dataCoordinates[1] * this.canvas.width + 5,
        (this.dataCoordinates[2] * this.canvas.height - (this.dataCoordinates[2] * this.canvas.height - this.dataCoordinates[0] * this.canvas.height) * 0.4) - 5,
        (this.dataCoordinates[3] * this.canvas.width - this.dataCoordinates[1] * this.canvas.width) * 0.4,
        (this.dataCoordinates[2] * this.canvas.height - this.dataCoordinates[0] * this.canvas.height) * 0.4);

      ctx.fillRect((this.dataCoordinates[3] * this.canvas.width - ((this.dataCoordinates[3] * this.canvas.width - this.dataCoordinates[1] * this.canvas.width) * 0.4)) - 5,
        (this.dataCoordinates[2] * this.canvas.height - (this.dataCoordinates[2] * this.canvas.height - this.dataCoordinates[0] * this.canvas.height) * 0.4) - 5,
        (this.dataCoordinates[3] * this.canvas.width - this.dataCoordinates[1] * this.canvas.width) * 0.4,
        (this.dataCoordinates[2] * this.canvas.height - this.dataCoordinates[0] * this.canvas.height) * 0.4);
      ctx.stroke();
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








  
