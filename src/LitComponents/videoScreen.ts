import {LitElement, html, PropertyValues} from 'lit';
import {customElement, query, state, property} from 'lit/decorators.js';
import { videoScreenStyles } from './ComponentStyles/videoScreenStyles';

@customElement('video-screen')
export class VideoScreen extends LitElement {

 static styles = videoScreenStyles

 @query('#canvas')
 canvas!: HTMLCanvasElement

 @query('#video')
 video: HTMLVideoElement

 @property()
 photo: boolean = false

 render() {
  
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
      this.video.srcObject = stream
      this.video.play()
    })
  }
  return html`
      <video id="video" width="" height="" autoplay></video>
      <!-- <canvas id="canvas" width="640px" height="480px"></canvas> -->
    `
   }
//    private _takePhoto() {
//     // this.photo = true
//     const ctx = this.canvas.getContext('2d')
//     ctx?.drawImage(this.video, 0, 0, 640, 480)
//    }
//    private _clearPhoto() {
//     // this.photo = false
//     const ctx = this.canvas.getContext('2d')
//     ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
//    }
  }