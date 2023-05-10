import { Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.queries.css']
})
export class AppComponent {
  constructor(private elRef: ElementRef) {}

  // Sticky navigation
  ngAfterViewInit() {
    const sectionMainHeroEl = this.elRef.nativeElement.querySelector(".main-hero")
    const obs = new IntersectionObserver(function(){},{});
    obs.observe(sectionMainHeroEl);
    
    
    
    
    const myName = 'Gena';
    const h1 = this.elRef.nativeElement.querySelector('.heading-primary');
   
    h1.style.color = '#8695b7';
    h1.style.fontSize = '60px';
    h1.addEventListener('click', this.handleClick);
  }
  handleClick(event: Event) {
    console.log('h1 clicked!');
  }
}
