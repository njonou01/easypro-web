import { Directive, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appOnselectItemDropdown]',
  standalone: true,
})
export class OnselectItemDropdownDirective implements AfterViewInit {
  @Output() appOnselectItemDropdown = new EventEmitter<string>();

  constructor(private elmnt: ElementRef) {}

  ngAfterViewInit(): void {
    const elmnt = this.elmnt.nativeElement;
    const listItems = elmnt.querySelectorAll('app-dropdown-item');

    listItems.forEach((li: HTMLElement) => {
      li.addEventListener('click', () => {
        listItems.forEach((item: HTMLElement) => {
          item.classList.remove('bg-gray-100');
        });
        li.classList.add('bg-gray-100');
        this.appOnselectItemDropdown.emit('li');
      });
    });
  }
}
