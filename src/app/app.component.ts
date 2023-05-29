import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  setActiveLink(currentRoute: string): void {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(item => {
      const link = item as HTMLAnchorElement;
     
      const route = link.getAttribute('routerLink');
    
      if (route === currentRoute) {
        console.log("sda");
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveLink(event.url);
      }
    });
    const sidebarToggle = document.querySelector('#sidebar .toggle-sidebar');
    const sidebar = document.querySelector('#sidebar');

    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }
  }
}
