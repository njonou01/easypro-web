import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-items',
  standalone: true,
  imports: [],
  template: ` <ng-content select="app-dropdown-item"></ng-content> `,
  styles: ``,
})
export class DropdownItemsComponent {}
