import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activateSection(link: HTMLAnchorElement): void {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    /* const sections = document.querySelectorAll('main > section');
    sections.forEach((section) => section.classList.remove('active'));
    const targetSection = document.querySelector(`main > section${link.getAttribute('href')}`);
    if (targetSection) {
      targetSection.classList.add('active');
    }*/
  }
  ngOnInit(): void {
    const sidebarToggle = document.querySelector('#sidebar .toggle-sidebar');
    const sidebar = document.querySelector('#sidebar');

    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }
  }
}
