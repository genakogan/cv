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
      strings: ["Software engineer","Software Academic lecturer"],
      loop: true,
      typeSpeed: 70,
      backSpeed: 10,
     
    cursorChar: "", // Added option: Custom cursor character
    shuffle: false, 
    };

    const typedElement =
      this.elementRef.nativeElement.querySelector('.field h2');
    if (typedElement !== null) {
      new Typed(typedElement, options);
    }
  }
}
