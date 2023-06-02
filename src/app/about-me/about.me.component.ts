import { Component, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { HomePageComponent } from "../home-page/home.page.component";
import Typed from "typed.js";

@Component({
    selector: 'app-personal-details',
    templateUrl: './about.me.component.html',
    styleUrls: ['./about.me.component.css']

})
export class AboutMeComponent{
  constructor(private elementRef: ElementRef) {}

   ngAfterViewInit(): void {
    const options = {
      strings: ['Software Engineer', 'Software Academic lecturer'],
      loop: true,
      typeSpeed: 70,
      backSpeed: 10,
      cursorChar:'',
      shuffle: true,
      smartBackspace: true,
      showCursor: true,
      startDelay: 1000,
      backDelay: 1500,
      fadeOut: true,
      /* fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500, */
    };

    const typedElement =
      this.elementRef.nativeElement.querySelector('.field h2');

    if (typedElement !== null) {
      new Typed(typedElement, options);
    }
  }
}