import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { DropdownComponent } from "./shared/dropdown/dropdown.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SharedModule, DropdownComponent]
})
export class AppComponent {
  title = 'craftsman-and-particular';
}
