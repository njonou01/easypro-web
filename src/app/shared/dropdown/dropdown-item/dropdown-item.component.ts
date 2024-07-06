import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li
      href="#"
      (click)="select()"
      class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
    >
      <ng-content #test ></ng-content>
    </li>
  `,
  styles: ``,
})
export class DropdownItemComponent {
  @Input() image: string | null = null;
  @Input() option: any;
  @Output() selectOption = new EventEmitter<any>();

  select() {
    this.selectOption.emit(this.option);
  }
}
