import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';

@Component({
  selector: 'fit-verse-root',
  imports: [RouterOutlet, WelcomeComponent],
  standalone: true,
  template: `
    <router-outlet/>
    <fit-verse-welcome/>
  `
})
export class AppComponent {
}
