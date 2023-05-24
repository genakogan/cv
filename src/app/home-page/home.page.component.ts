import { Component, ElementRef, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.css'],
})
export class HomePageComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const options = {
      strings: ['Software Engineer', 'Software Academic lecturer'],
      loop: true,
      typeSpeed: 70,
      backSpeed: 10,
      cursorChar: '',
      shuffle: false,
      smartBackspace: true,
      showCursor: true,
      startDelay: 1000,
      backDelay: 1500,
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    };

    const typedElement =
      this.elementRef.nativeElement.querySelector('h2');

    if (typedElement !== null) {
      new Typed(typedElement, options);
    }
  }
}
