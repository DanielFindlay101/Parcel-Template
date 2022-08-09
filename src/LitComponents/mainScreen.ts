import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { mainScreenStyles } from "./ComponentStyles/mainScreenStyles";
import "./topBar";
import "./bottomBar";
import "./videoScreen";
import "./startScreen";
import "./startScreen";

@customElement("fixzy-detect")
export class MainScreen extends LitElement {
	static styles = mainScreenStyles;

	@property()
	hasClicked: boolean = false;

	render() {
		return html`
			${this.hasClicked
				? html`
						<div class="screen-container">
							<top-bar class="topbar-styles"></top-bar>
							<video-screen></video-screen>
							<bottom-bar class="bottombar-styles"></bottom-bar>
						</div>
				  `
				: html` <start-screen @click=${this._toggleClicked}></start-screen> `}
		`;
	}

	private _toggleClicked() {
		this.hasClicked = !this.hasClicked;
	}
}
