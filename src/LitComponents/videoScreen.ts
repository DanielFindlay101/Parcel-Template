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

shouldUpdate(changedProperties: PropertyValues<this>): boolean {
  return !(changedProperties.size === 1 && changedProperties.has("canvas"));
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
       ${this.hasPhoto ? html `
          <div class="error-container">
            ${map(this.returnedData, (actualData) => 
              html`
                <span class="detect-pill">${actualData}</span>
              `
            )}
          </div>
          ` : "" }
      <canvas id="canvas"></canvas>
    `
  }

 private _takePhoto() {
  const API_URL = 'https://emdev.smartenapps.com/defect-content/index.php'
  const ctx = this.canvas?.getContext('2d')
  ctx.canvas.width = 400;
  ctx.canvas.height = 300; 
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
      this.hasPhoto = !this.hasPhoto
      // console.log(this.returnedData);
      })
    .catch(error => console.log(error))
    }, 'image/jpeg')
  }  
  
 private _clearPhoto() {
  const ctx = this.canvas?.getContext('2d')
  ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
  this.hasPhoto = !this.hasPhoto
 } 
}








  