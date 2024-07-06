import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  public onWindowScroll(event: any): void {
    this.handleStickyNavbar();
    this.addNavbarShadow();
  }
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  languages = [
    { label: 'FR', value: 'fr' },
    { label: 'EN', value: 'en' },
    { label: 'ES', value: 'es' },
    { label: 'IT', value: 'it' },
  ];

  onSelect(option: any) {
    console.log('Option selected:', option);
  }

  handleStickyNavbar() {
    const navbar = this.navbar.nativeElement;
    var stickyOffset = navbar.offsetTop;

    if (window.scrollY > stickyOffset || window.pageYOffset > stickyOffset) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  addNavbarShadow() {
    const navbar = this.navbar.nativeElement;
    if (window.scrollY === 0 || window.pageYOffset === 0) {
      navbar.classList.remove('shadow-lg');
      navbar.classList.remove('bg-white');
    } else {
      navbar.classList.add('shadow-lg');
      navbar.classList.add('bg-white');
    }
  }
}
