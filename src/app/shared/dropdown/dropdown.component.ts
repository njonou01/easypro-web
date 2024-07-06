import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef,  ViewChild } from '@angular/core';
import { ClickOutsideDirective } from '../../click-outside.directive';
import { DropdownPlaceholderComponent } from './dropdown-placeholder/dropdown-placeholder.component';
import { OnselectItemDropdownDirective } from './onselect-item-dropdown.directive';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  template: `
    <div class="relative inline-block text-left" (click)="toggleDropdown($event)" appClickOutside (clickOutside)="closeDropdown()">
      <div>
        <button
          type="button"
          class="inline-flex justify-center items-center w-full gap-2  py-2 bg-transparent text-sm font-medium text-gray-700  focus:outline-none"
          id="options-menu"
        >
          <ng-container class="flex items-center justify-center">
            <ng-content select="app-dropdown-icon"></ng-content>
            <ng-container *ngIf="selectedOption">
              {{ selectedOption }}
            </ng-container>
            <ng-container *ngIf="!selectedOption">
              <ng-content select="app-dropdown-placeholder"></ng-content>
            </ng-container>
          </ng-container>
        </button>
      </div>

      <div
        [ngClass]="{ hidden: !isOpen }"
        #testChild
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <ul>
            <ng-content select="app-dropdown-items"></ng-content>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  imports: [CommonModule, ClickOutsideDirective, DropdownPlaceholderComponent, OnselectItemDropdownDirective],
})
export class DropdownComponent implements AfterViewInit {
  @ViewChild('testChild') child!: ElementRef;
  ngAfterViewInit(): void {
    const children: [HTMLElement] = this.child.nativeElement.querySelectorAll('li');
    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      element.addEventListener('click', () => {
        this.onSelect(element.innerText);
      });
    }
  }

  isOpen = false;
  selectedOption: any = null;

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  onSelect(option: any) {
    console.log(option);
    this.selectedOption = option;
  }
}
