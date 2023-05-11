import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.css', './home.page.queries.css'],
})
export class HomePageComponent {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
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
