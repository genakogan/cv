import AbstractView from "./abstract_view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("CV - Genady Kogan");
    }

    async  getHtml() {
        try {
          const response = await fetch('./static/html/views/education.html');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const html = await response.text();
          return html;
        } catch (error) {
          console.error(`Error fetching HTML: ${error.message}`);
        }
      }
}