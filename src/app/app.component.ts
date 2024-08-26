import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'kil-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Cereal Killer';
  name = 'Triple Karmeliet';
  life = 8;

  incrementLife() {
    console.log('+1 point de vie');
  }

  decrementLife() {
    console.log('-1 point de vie');
  }
}
