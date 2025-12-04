import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'fit-verse-root',
  imports: [RouterOutlet],
  standalone: true,
  template: `
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <router-outlet/>
  `
})
export class AppComponent {
}
