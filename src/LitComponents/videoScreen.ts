import { LitElement, html } from "lit";
import { customElement, query, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { videoScreenStyles } from "./ComponentStyles/videoScreenStyles";
import { ReturnedData } from "../ReturnedData";
import "./bottomBar";

@customElement("video-screen")
export class VideoScreen extends LitElement {
	static styles = videoScreenStyles;

	@property()
	returnedData: any;

	@property()
	dataCoordinates: any;

	@property()
	dataName: any;

	@query("#canvas")
	canvas!: HTMLCanvasElement;

	@query("#video")
	video: HTMLVideoElement;

	@query("#box")
	box: HTMLDivElement;

	@state()
	hasPhoto: boolean;

	createPhotoEvent: any;
	clearPhotoEvent: any;

	connectedCallback(): void {
		super.connectedCallback();
		this.createPhotoEvent = this._takePhoto.bind(this);
		this.clearPhotoEvent = this._clearPhoto.bind(this);
		window.addEventListener("photo-event", this.createPhotoEvent);
		window.addEventListener("clear-event", this.clearPhotoEvent);
	}
	disconnectedCallback(): void {
		window.removeEventListener("photo-event", this.createPhotoEvent);
		window.removeEventListener("clear-event", this.clearPhotoEvent);
		super.disconnectedCallback();
	}

	render() {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia({
					video: {
						width: { ideal: 640 },
						facingMode: "environment",
					},
				})
				.then((stream) => {
					this.video.srcObject = stream;
					this.video.play();
				})
				.catch((err) => console.log(err));
		}

		return html`
			<canvas id="canvas"></canvas>
			${this.hasPhoto
				? html`
						<div class="error-container">
							<span class="detect-pill">${this.dataName} Detected</span>
						</div>
				  `
				: html` <video id="video" autoplay playsinline></video> `}
		`;
	}

	private _takePhoto() {
		this.hasPhoto = !this.hasPhoto;
		const API_URL = `https://82.4.26.118:5000/process`;
		const ctx = this.canvas?.getContext("2d");

		// //Use this for webcam
		ctx.canvas.width = 400;
		ctx.canvas.height = 300;

		//Use this for devices
		// ctx.canvas.width = 390;
		// ctx.canvas.height = 520;
		ctx?.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

		this.canvas.toBlob((blob) => {
			const formData = new FormData();
			formData.append("file", blob, "file");
			fetch(API_URL, {
				method: "POST",
				body: formData,
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					this.dataName = data.classes.replace(/[^A-Za-z*' ']/g, "");
					console.log(this.dataName);
					this.dataCoordinates = data.bboxes
						.replace(/[^1-9, ]/g, "")
						.split(",");
					console.log(this.dataCoordinates);

					if (data.classes.includes("Door")) {
						this._drawDoor();
					}
					if (data.classes.includes("Window")) {
						this._drawWindow();
					}
				})
				.catch((error) => console.log(error));
		}, "image/jpeg");
	}

	private _clearPhoto() {
		this.hasPhoto = !this.hasPhoto;
		const ctx = this.canvas?.getContext("2d");
		ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.returnedData = "";
	}

	private _drawWindow() {
		const ctx = this.canvas?.getContext("2d");
		//Draw Window onto canvas
		ctx.beginPath();
		ctx.fillStyle = "rgba(0, 128, 0, 0.3)";
		ctx.strokeStyle = "rgba(0, 0, 0, 0.6)";
		ctx.lineWidth = 2;
		ctx.moveTo(this.dataCoordinates[0], this.dataCoordinates[1]),
			ctx.lineTo(this.dataCoordinates[2], this.dataCoordinates[3]),
			ctx.lineTo(this.dataCoordinates[4], this.dataCoordinates[5]),
			ctx.lineTo(this.dataCoordinates[6], this.dataCoordinates[7]),
			ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}

	private _drawDoor() {
		console.log("DOOR");
		const ctx = this.canvas?.getContext("2d");
		//Draw door onto canvas
		ctx.beginPath();
		ctx.fillStyle = "rgba(223, 71, 83, 0.5)";
		ctx.moveTo(this.dataCoordinates[0], this.dataCoordinates[1]),
			ctx.lineTo(this.dataCoordinates[2], this.dataCoordinates[3]),
			ctx.lineTo(this.dataCoordinates[4], this.dataCoordinates[5]),
			ctx.lineTo(this.dataCoordinates[6], this.dataCoordinates[7]),
			ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
}

// this.dataCoordinates = data
// 	.replace(/[^0-9,.]/g, "")
// 	.split(",")
// 	.slice(0, 4);
// this.returnedData = data.replace(/[^A-Za-z*' ']/g, "").split("*");
// console.log(this.returnedData);
// if (this.returnedData.includes("Window")) {
// 	this._drawWindow();
// }
// if (this.returnedData.includes("Door")) {
// 	this._drawDoor();
// }
