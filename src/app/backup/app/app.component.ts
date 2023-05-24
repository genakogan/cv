import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private elRef: ElementRef) { }

  // Sticky navigation
  ngAfterViewInit() {
    const sectionMainHeroEl = this.elRef.nativeElement.querySelector(".main-hero")
    const obs = new IntersectionObserver(function (entries) {
      const ent = entries[0];
      if (!ent.isIntersecting) {
        console.log(ent);
        document.querySelector(".main-hero")?.classList.add(".sticky")
      }
    }, {
      // In the viewport
      root: null,
      threshold: 0
    });
    obs.observe(sectionMainHeroEl);

    const h1 = this.elRef.nativeElement.querySelector('.heading-primary');

    if (h1 !== null) {
      h1.style.color = '#8695b7';
      h1.style.fontSize = '60px';
      h1.addEventListener('click', this.handleClick);
    }
  }

  handleClick(event: Event) {
    console.log('h1 clicked!');
  }
}
