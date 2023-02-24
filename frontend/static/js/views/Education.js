import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Education");
    }

    async getHtml() {
        return `
            <h1>Education</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}